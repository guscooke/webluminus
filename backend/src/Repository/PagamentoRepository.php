<?php

declare(strict_types=1);

namespace App\Repository;

use App\Exception\Pagamento;

final class PagamentoRepository extends BaseRepository
{
    public function getPagamento(int $lead_id): \App\Entity\Pagamento
    {
        $query = 'SELECT 
					lead_id, data_pagamento AS log_em, comissao_afiliado, valor_pagamento, comentarios, criado_em, criado_por
				FROM leads_pagamento WHERE lead_id = :lead_id ORDER BY data_pagamento ASC';
        $statement = $this->database->prepare($query);
        $statement->bindParam('lead_id', $lead_id);
        $statement->execute();
        $pagamento = $statement->fetchObject(\App\Entity\Pagamento::class);
        if (! $pagamento) {
            throw new Pagamento('Pagamento não encontrado.', 404);
        }

        return $pagamento;
    }
	
	public function getLog(int $lead_id): array
    {
        $query = 'SELECT 
					lead_id, data_pagamento AS log_em, comissao_afiliado, valor_pagamento, comentarios, criado_em, criado_por
				FROM leads_pagamento WHERE lead_id = :lead_id ORDER BY data_pagamento ASC';
        $statement = $this->database->prepare($query);
		$statement->bindParam('lead_id', $lead_id);
        $statement->execute();

        return $statement->fetchAll();
    }

    public function getPagamentoByPage(
        int $page,
        int $perPage,
        ?string $data_pagamento,
        ?float $comissao_afiliado,
        ?float $valor_pagamento,
        ?string $comentarios,
		?int $afiliado_id
    ): array {
        $params = [
            'afiliado_id' => is_null($afiliado_id) ? 0 : $afiliado_id,
        ];
        if(!isset($afiliado_id) || $afiliado_id == 0){
			$query = "
				SELECT id, nome, cpf, contato
				FROM leads l           							
				WHERE (coalesce(l.afiliado_id, 0) = coalesce(:afiliado_id, 0)	OR 1 = 1 )
				ORDER BY nome
			";
		}else{
			$query = "
				SELECT id, nome, cpf, contato
				FROM leads l
				WHERE coalesce(l.afiliado_id, 0) = coalesce(:afiliado_id, 0)
				ORDER BY nome
			";
		}
		
        $statement = $this->database->prepare($query);
		$statement->bindParam('afiliado_id', $afiliado_id);
        /*$statement->bindParam('data_pagamento', $data_pagamento);
        $statement->bindParam('comissao_afiliado', $comissao_afiliado);
        $statement->bindParam('valor_pagamento', $valor_pagamento);
        $statement->bindParam('comentarios', $comentarios);*/
        
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

    public function getQueryPagamentoByPage(): string
    {
        return "
            SELECT id, nome, cpf, contato
            FROM leads            
            ORDER BY nome
        ";
    }

    public function getAll(): array
    {
        $query = 'SELECT lead_id, data_pagamento, comissao_afiliado, valor_pagamento, comentarios, criado_em, criado_por
					FROM leads_pagamento ORDER BY data_pagamento';
        $statement = $this->database->prepare($query);
        $statement->execute();

        return $statement->fetchAll();
    }

    public function create(\App\Entity\Pagamento $pagamento, $lead_id): \App\Entity\Pagamento
    {
		$query = '
            INSERT INTO leads_pagamento
                (lead_id, data_pagamento, comissao_afiliado, valor_pagamento, comentarios, criado_por)
            VALUES
                (:lead_id, :data_pagamento, :comissao_afiliado, :valor_pagamento, :comentarios, :criado_por)
        ';
        $statement = $this->database->prepare($query);
		
        $data_pagamento= $pagamento->getDataPagamento();
        $comissao_afiliado = $pagamento->getComissaoAfiliado();
        $valor_pagamento= $pagamento->getValorPagamento();
        $comentarios = $pagamento->getComentarios();
        $criado_por = $pagamento->getCriadoPor();
	
        $statement->bindParam('lead_id', $lead_id);
        $statement->bindParam('data_pagamento', $data_pagamento);
        $statement->bindParam('comissao_afiliado', $comissao_afiliado);
        $statement->bindParam('valor_pagamento', $valor_pagamento);
        $statement->bindParam('comentarios', $comentarios);
        $statement->bindParam('criado_por', $criado_por);
	
        $statement->execute();

        return $this->getPagamento((int)$lead_id);
    }

    public function update(\App\Entity\Pagamento $pagamento): \App\Entity\Pagamento
    {
        $query = '
            UPDATE leads_pagamento 
			SET data_pagamento = :data_pagamento, 
				comissao_afiliado = :comissao_afiliado, 
				valor_pagamento = :valor_pagamento, 
				comentarios = :comentarios				
			WHERE lead_id = :lead_id
        ';
        $statement = $this->database->prepare($query);
       
		$lead_id = $pagamento->getLeadId();
        $data_pagamento= $pagamento->getDataPagamento();
        $comissao_afiliado = $pagamento->getComissaoAfiliado();
        $valor_pagamento= $pagamento->getValorPagamento();
        $comentarios = $pagamento->getComentarios();           
		
		$statement->bindParam('lead_id', $lead_id);
        $statement->bindParam('data_pagamento', $data_pagamento);
        $statement->bindParam('comissao_afiliado', $comissao_afiliado);
        $statement->bindParam('valor_pagamento', $valor_pagamento);
        $statement->bindParam('comentarios', $comentarios);
        
        $statement->execute();

        return $this->getPagamento((int) $id);
    }

    public function delete(int $pagamentoId): void
    {
        $query = 'DELETE FROM leads_pagamento WHERE id = :id';
        $statement = $this->database->prepare($query);
        $statement->bindParam('id', $pagamentoId);
        $statement->execute();
    }
}
