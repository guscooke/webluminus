<?php

declare(strict_types=1);

namespace App\Repository;

use App\Exception\Admin;

final class AdminRepository extends BaseRepository
{
    public function getAdmin(int $userId): \App\Entity\Admin
    {
        $query = 'SELECT `id`, `nome`, `email`, `ativo`, `afiliado_id` FROM `admin` WHERE `id` = :id';
        $statement = $this->database->prepare($query);
        $statement->bindParam('id', $userId);
        $statement->execute();
        $admin = $statement->fetchObject(\App\Entity\Admin::class);
        if (! $admin) {
            throw new Admin('Admin not found.', 404);
        }

        return $admin;
    }

    public function checkAdminByEmail(string $email): void
    {
        $query = 'SELECT * FROM `admin` WHERE `email` = :email';
        $statement = $this->database->prepare($query);
        $statement->bindParam('email', $email);
        $statement->execute();
        $admin = $statement->fetchObject();
        if ($admin) {
            throw new Admin('Email already exists.', 400);
        }
    }

    public function getAdminsByPage(
        int $page,
        int $perPage,
        ?string $nome,
        ?string $email,
        ?string $ativo,
        ?int $afiliado_id
    ): array {
        $params = [
            'nome' => is_null($nome) ? '' : $nome,
            'email' => is_null($email) ? '' : $email,
            'ativo' => is_null($ativo) ? '' : $ativo,
            'afiliado_id' => is_null($afiliado_id) ? 0 : $afiliado_id,
        ];
		
		$query = isset($afiliado_id) ? $this->getQueryAdminsByPageAfiliado() : $this->getQueryAdminsByPage();		
		
        $statement = $this->database->prepare($query);
        $statement->bindParam('nome', $params['nome']);
        $statement->bindParam('email', $params['email']);
        $statement->bindParam('ativo', $params['ativo']);
		$statement->bindParam('afiliado_id', $afiliado_id);
        $statement->execute();
        $total = $statement->rowCount();

        return $this->getResultsWithPagination(
            $query,
            $page,
            $perPage,
            $params,
            $total
        );
    }

    public function getQueryAdminsByPage(): string
    {
        return "
            SELECT `id`, `nome`, `email`, `ativo`, `afiliado_id`
            FROM `admin`
            WHERE `nome` LIKE CONCAT('%', :nome, '%')
            AND `email` LIKE CONCAT('%', :email, '%')
            AND `ativo` LIKE CONCAT('%', :ativo, '%')     
			AND (coalesce(`afiliado_id`, 0) = :afiliado_id OR 1 = 1 )
            ORDER BY `nome`
        ";
    }
	public function getQueryAdminsByPageAfiliado(): string
    {
        return "
            SELECT `id`, `nome`, `email`, `ativo`, `afiliado_id`
            FROM `admin`
            WHERE `nome` LIKE CONCAT('%', :nome, '%')
            AND `email` LIKE CONCAT('%', :email, '%')
            AND `ativo` LIKE CONCAT('%', :ativo, '%')
            AND coalesce(`afiliado_id`, 0) = :afiliado_id
            ORDER BY `nome`
        ";
    }

    public function getAll(): array
    {
        $query = 'SELECT `id`, `nome`, `email`, `ativo`, `afiliado_id` FROM `admin` ORDER BY `id`';
        $statement = $this->database->prepare($query);
        $statement->execute();

        return $statement->fetchAll();
    }

    public function loginAdmin(string $email, string $password): \App\Entity\Admin
    {
        $query = '
            SELECT id, nome, email, 1 AS ativo, NULL AS afiliado_id
            FROM `admin`
            WHERE `email` = :email AND `password` = :password AND `ativo` = "S"
			
			UNION ALL
			
			SELECT id, nome, email, 1 AS ativo, id AS afiliado_id
			FROM afiliado a
			WHERE a.email = :email2 AND a.password = :password2
        ';
        
		$statement = $this->database->prepare($query);		
        $statement->bindParam('email', $email);        
        $statement->bindParam('password', $password);
		$statement->bindParam('email2', $email);
        $statement->bindParam('password2', $password);
        $statement->execute();
		
        $admin = $statement->fetchObject(\App\Entity\Admin::class);
		
        if (! $admin) {
            throw new Admin('Login failed: Email or password incorrect.', 400);
        }

        return $admin;
    }

    public function create(\App\Entity\Admin $admin): \App\Entity\Admin
    {
        $query = '
            INSERT INTO `admin`
                (`nome`, `email`, `password`, `ativo`, `afiliado_id`)
            VALUES
                (:nome, :email, :password, :ativo, :afiliado_id)
        ';
        $statement = $this->database->prepare($query);
        $nome = $admin->getName();
        $email = $admin->getEmail();
        $password = $admin->getPassword();
        $ativo = $admin->getAtivo();
        $afiliado_id = $admin->getAfiliadoId();
        $statement->bindParam('nome', $nome);
        $statement->bindParam('email', $email);
        $statement->bindParam('password', $password);
        $statement->bindParam('ativo', $ativo);
        $statement->bindParam('afiliado_id', $afiliado_id);
        $statement->execute();

        return $this->getAdmin((int) $this->database->lastInsertId());
    }

    public function update(\App\Entity\Admin $admin): \App\Entity\Admin
    {
        $query = '
            UPDATE `admin` SET `nome` = :nome, `email` = :email, `ativo` = :ativo, `afiliado_id` = :afiliado_id WHERE `id` = :id
        ';
        $statement = $this->database->prepare($query);
        $id = $admin->getId();
        $nome = $admin->getName();
        $email = $admin->getEmail();
        $ativo = $admin->getAtivo();
        $afiliado_id = $admin->getAfiliadoId();
        $statement->bindParam('id', $id);
        $statement->bindParam('nome', $nome);
        $statement->bindParam('email', $email);
        $statement->bindParam('ativo', $ativo);
		$statement->bindParam('afiliado_id', $afiliado_id);
        $statement->execute();

        return $this->getAdmin((int) $id);
    }

    public function delete(int $adminId): void
    {
        $query = 'DELETE FROM `admin` WHERE `id` = :id';
        $statement = $this->database->prepare($query);
        $statement->bindParam('id', $adminId);
        $statement->execute();
    }
	
	public function getLeadsAfiliado($afiliado, $data_ini, $data_fim): array
    {
        $where = '';
		if(isset($afiliado)){
			$where = 'WHERE a.id = :afiliado';
		}
		
		$query = 'SELECT 
					a.nome, COUNT(l.id) AS leads
				FROM afiliado a
				INNER JOIN leads l 
				ON l.afiliado_id = a.id
				'.$where.'
				GROUP BY a.nome';
        
		$statement = $this->database->prepare($query);		
		if(isset($afiliado)){
			$statement->bindParam('afiliado', $afiliado);
		}
        $statement->execute();

        return $statement->fetchAll();
    }
	
	public function getLeadsStatus($afiliado, $data_ini, $data_fim): array
    {
        $where = '';
        $where2 = '';
		if(isset($afiliado)){
			$where .= ' AND l.afiliado_id = :afiliado';
			$where2 .= ' AND l.afiliado_id = :afiliado2';
		}
		
		/*if(isset($data_ini)){
			$where .= ' AND l.criado_em >= :data_ini';
		}
		
		if(isset($data_fim)){
			$where .= ' AND l.criado_em <= :data_fim';
		}*/
		
		$query = "SELECT 
					COUNT(id) as qty,
					status,
					null motivo
					FROM leads l
					WHERE 1 = 1 $where
					GROUP BY 
					status

					UNION ALL

					SELECT 
					COUNT(id) as qty,
					'Detalhes' status,
					CASE WHEN l.status = 'Declinado' THEN (SELECT ll.motivo FROM leads_log ll WHERE ll.lead_id = l.id AND ll.status = l.status LIMIT 1)
					ELSE null END motivo
					FROM leads l
					WHERE 1 = 1 $where2
					GROUP BY 
					CASE WHEN l.status = 'Declinado' THEN (SELECT ll.motivo FROM leads_log ll WHERE ll.lead_id = l.id AND ll.status = l.status LIMIT 1)
					ELSE null END
					HAVING motivo IS NOT NULL";
					
		
        $statement = $this->database->prepare($query);		
		if(isset($afiliado)){
			$statement->bindParam('afiliado', $afiliado);
			$statement->bindParam('afiliado2', $afiliado);
		}
		
		/*if(isset($data_ini)){
			$statement->bindParam('data_ini', $data_ini);
			$statement->bindParam('data_ini', $data_ini);
		}
		
		if(isset($data_fim)){
			$statement->bindParam('data_fim', $data_fim);
			$statement->bindParam('data_fim', $data_fim);
		}*/
        $statement->execute();

        return $statement->fetchAll();
    }
	
	public function getPagamentosStatus($afiliado, $data_ini, $data_fim): array
    {
        $where = '';
		if(isset($afiliado)){
			$where .= ' AND l.afiliado_id = :afiliado';
		}
		
		if(isset($data_ini)){
			$where .= ' AND l.criado_em >= :data_ini';
		}
		
		if(isset($data_fim)){
			$where .= ' AND l.criado_em <= :data_fim';
		}
		
		$query = 'SELECT SUM(p.valor_pagamento) as total, l.nome 
					FROM leads l 
					INNER JOIN leads_pagamento p ON l.id = p.lead_id 
					WHERE 1 = 1 '.$where.'
					GROUP BY l.nome';
        $statement = $this->database->prepare($query);
		if(isset($afiliado)){
			$statement->bindParam('afiliado', $afiliado);			
		}
		
		if(isset($data_ini)){
			$statement->bindParam('data_ini', $data_ini);			
		}
		
		if(isset($data_fim)){
			$statement->bindParam('data_fim', $data_fim);			
		}
        $statement->execute();

        return $statement->fetchAll();
    }
}
