<?php

declare(strict_types=1);

namespace App\Repository;

use App\Exception\Afiliado;

final class AfiliadoRepository extends BaseRepository
{
    public function getAfiliado(int $userId): \App\Entity\Afiliado
    {
        $query = 'SELECT 
					`id`, `nome`, `email`, `cnpj`, `endereco`, `cidade`, `estado`, `cep`, `ativo`, `criado_em`, `criado_por`, `atualizado_em`, `atualizado_por`, `banco`, `agencia`, `conta`, `corrente_poupanca`, `comissao`
				FROM `afiliado` WHERE `id` = :id';
        $statement = $this->database->prepare($query);
        $statement->bindParam('id', $userId);
        $statement->execute();
        $afiliado = $statement->fetchObject(\App\Entity\Afiliado::class);
        if (! $afiliado) {
            throw new Afiliado('Afiliado não encontrado.', 404);
        }

        return $afiliado;
    }

    public function checkAfiliadoByCnpj(string $cnpj): void
    {
        $query = 'SELECT * FROM `afiliado` WHERE `cnpj` = :cnpj';
        $statement = $this->database->prepare($query);
        $statement->bindParam('cnpj', $cnpj);
        $statement->execute();
        $afiliado= $statement->fetchObject();
        if ($afiliado) {
            throw new Afiliado('CPF/CNPJ já cadastrado.', 400);
        }
    }

    public function getAfiliadoByPage(
        int $page,
        int $perPage,
        ?string $nome,
        ?string $email,
        ?string $cnpj,
        ?string $endereco,
        ?string $cidade,
        ?string $estado,
        ?string $cep,
        ?string $ativo,        
        ?string $banco,
        ?string $agencia,
        ?string $conta,
        ?string $corrente_poupanca
    ): array {
        $params = [
            'nome' => is_null($nome) ? '' : $nome,
            'email' => is_null($email) ? '' : $email,
            'cnpj' => is_null($cnpj) ? '' : $cnpj,
            'endereco' => is_null($endereco) ? '' : $endereco,
            'cidade' => is_null($cidade) ? '' : $cidade,
            'estado' => is_null($estado) ? '' : $estado,
            'cep' => is_null($cep) ? '' : $cep,
			'ativo' => is_null($ativo) ? '' : $ativo,            
            'banco' => is_null($banco) ? '' : $banco,
            'agencia' => is_null($agencia) ? '' : $agencia,
            'conta' => is_null($conta) ? '' : $conta,
            'corrente_poupanca' => is_null($corrente_poupanca) ? '' : $corrente_poupanca,            
        ];
        $query = $this->getQueryAfiliadoByPage();
        $statement = $this->database->prepare($query);
        $statement->bindParam('nome', $nome);
        $statement->bindParam('email', $email);
        $statement->bindParam('cnpj', $cnpj);
        $statement->bindParam('endereco', $endereco);
        $statement->bindParam('cidade', $cidade);
        $statement->bindParam('estado', $estado);
        $statement->bindParam('cep', $cep);
        $statement->bindParam('ativo', $ativo);        
        $statement->bindParam('banco', $banco);
        $statement->bindParam('agencia', $agencia);
        $statement->bindParam('conta', $conta);
        $statement->bindParam('corrente_poupanca', $corrente_poupanca);
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

    public function getQueryAfiliadoByPage(): string
    {
        return "
            SELECT `id`, `nome`, `email`, `cnpj`, `endereco`, `cidade`, `estado`, `cep`, `ativo`, `criado_em`, `criado_por`, `atualizado_em`, `atualizado_por`, `banco`, `agencia`, `conta`, `corrente_poupanca`, `comissao`
            FROM `afiliado`
            WHERE `nome` LIKE CONCAT('%', :nome, '%')
            AND (`email` LIKE CONCAT('%', :email, '%') OR `email` IS NULL)
            AND `cnpj` LIKE CONCAT('%', :cnpj, '%')
            AND (`endereco` LIKE CONCAT('%', :endereco, '%') OR `endereco` IS NULL)
            AND (`cidade` LIKE CONCAT('%', :cidade, '%') OR `cidade` IS NULL)
            AND (`estado` LIKE CONCAT('%', :estado, '%') OR `estado` IS NULL)
            AND (`cep` LIKE CONCAT('%', :cep, '%') OR `cep` IS NULL)
            AND (`ativo` LIKE CONCAT('%', :ativo, '%') OR `ativo` IS NULL)
            AND `banco` LIKE CONCAT('%', :banco, '%')
            AND `agencia` LIKE CONCAT('%', :agencia, '%')
            AND `conta` LIKE CONCAT('%', :conta, '%')
            AND `corrente_poupanca` LIKE CONCAT('%', :corrente_poupanca, '%')
            ORDER BY `id`
        ";
    }

    public function getAll(): array
    {
        $query = 'SELECT `id`, `nome`, `email`, `cnpj`, `endereco`, `cidade`, `estado`, `cep`, `ativo`, `criado_em`, `criado_por`, `atualizado_em`, `atualizado_por`, `banco`, `agencia`, `conta`, `corrente_poupanca`
					FROM `afiliado` ORDER BY `id`';
        $statement = $this->database->prepare($query);
        $statement->execute();

        return $statement->fetchAll();
    }
	
	public function loginAfiliado(string $email, string $password): \App\Entity\Afiliado
    {
        $query = '
			SELECT id, nome, email, 1 AS ativo, id AS afiliado_id
			FROM afiliado a
			WHERE a.email = :email2 AND a.password = :password2
        ';
        
		$statement = $this->database->prepare($query);        
		$statement->bindParam('email2', $email);
        $statement->bindParam('password2', $password);
        $statement->execute();
		
        $admin = $statement->fetchObject(\App\Entity\Afiliado::class);
		
        if (! $admin) {
            throw new Afiliado('Login failed: Email or password incorrect.', 400);
        }

        return $admin;
    }

    public function create(\App\Entity\Afiliado $afiliado): \App\Entity\Afiliado
    {
        $query = '
            INSERT INTO `afiliado`
                (`nome`, `cnpj`, `endereco`, `cidade`, `estado`, `cep`, `ativo`, `criado_por`, `banco`, `agencia`, `conta`, `corrente_poupanca`, `email`, `password`, `comissao`)
            VALUES
                (:nome, :cnpj, :endereco, :cidade, :estado, :cep, :ativo, :criado_por, :banco, :agencia, :conta, :corrente_poupanca, :email, :password, :comissao)
        ';
        $statement = $this->database->prepare($query);
        
		$nome = $afiliado->getNome();
        $cnpj= $afiliado->getCnpj();
        $endereco = $afiliado->getEndereco();
        $cidade= $afiliado->getCidade();
        $estado = $afiliado->getEstado();
        $cep = $afiliado->getCep();
        $ativo = $afiliado->getAtivo();
        $criado_por = $afiliado->getCriadoPor();
        $banco = $afiliado->getBanco();
        $agencia = $afiliado->getAgencia();
        $conta = $afiliado->getConta();
        $corrente_poupanca = $afiliado->getCorrentePoupanca();
        $email = $afiliado->getEmail();
        $password = $afiliado->getPassword();
        $comissao = $afiliado->getComissao();
		
        $statement->bindParam('nome', $nome);
        $statement->bindParam('cnpj', $cnpj);
        $statement->bindParam('endereco', $endereco);
        $statement->bindParam('cidade', $cidade);
        $statement->bindParam('estado', $estado);
        $statement->bindParam('cep', $cep);
        $statement->bindParam('ativo', $ativo);        
        $statement->bindParam('criado_por', $criado_por);        
        $statement->bindParam('banco', $banco);
        $statement->bindParam('agencia', $agencia);
        $statement->bindParam('conta', $conta);
        $statement->bindParam('corrente_poupanca', $corrente_poupanca);
        $statement->bindParam('email', $email);
        $statement->bindParam('password', $password);
        $statement->bindParam('comissao', $comissao);
        $statement->execute();

        return $this->getAfiliado((int) $this->database->lastInsertId());
    }

    public function update(\App\Entity\Afiliado $afiliado): \App\Entity\Afiliado
    {
        $query = '
            UPDATE `afiliado` 
			SET `nome` = :nome, 
				`email` = :email, 
				`cnpj` = :cnpj, 
				`endereco` = :endereco, 
				`cidade` = :cidade, 
				`estado` = :estado, 
				`cep` = :cep, 
				`ativo` = :ativo,				
				`banco` = :banco,
				`agencia` = :agencia,
				`conta` = :conta,
				`corrente_poupanca` = :corrente_poupanca,
				`password` = :password,
				`comissao` = :comissao
			WHERE `id` = :id
        ';
        $statement = $this->database->prepare($query);
        $id = $afiliado->getId();
        $nome = $afiliado->getNome();
        $email = $afiliado->getEmail();
        $cnpj= $afiliado->getCnpj();
        $endereco = $afiliado->getEndereco();
        $cidade= $afiliado->getCidade();
        $estado = $afiliado->getEstado();
        $cep = $afiliado->getCep();
        $ativo = $afiliado->getAtivo();        
        $banco = $afiliado->getBanco();
        $agencia = $afiliado->getAgencia();
        $conta = $afiliado->getConta();
        $corrente_poupanca = $afiliado->getCorrentePoupanca();
        $password = $afiliado->getPassword();
        $comissao = $afiliado->getComissao();
		
        $statement->bindParam('id', $id);
        $statement->bindParam('nome', $nome);
        $statement->bindParam('cnpj', $cnpj);
        $statement->bindParam('endereco', $endereco);
        $statement->bindParam('cidade', $cidade);
        $statement->bindParam('estado', $estado);
        $statement->bindParam('cep', $cep);
        $statement->bindParam('ativo', $ativo);                
        $statement->bindParam('banco', $banco);
        $statement->bindParam('agencia', $agencia);
        $statement->bindParam('conta', $conta);
        $statement->bindParam('corrente_poupanca', $corrente_poupanca);
        $statement->bindParam('email', $email);
        $statement->bindParam('password', $password);
        $statement->bindParam('comissao', $comissao);
        $statement->execute();

        return $this->getAfiliado((int) $id);
    }

    public function delete(int $afiliadoId): void
    {
        $query = 'DELETE FROM `afiliado` WHERE `id` = :id';
        $statement = $this->database->prepare($query);
        $statement->bindParam('id', $afiliadoId);
        $statement->execute();
    }
}
