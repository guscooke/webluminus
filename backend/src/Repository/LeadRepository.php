<?php

declare(strict_types=1);

namespace App\Repository;

use App\Exception\Lead;

final class LeadRepository extends BaseRepository
{
    public function getLead(int $userId): \App\Entity\Lead
    {
        $query = 'SELECT
					id, nome, cpf, endereco, cidade, estado, cep, contato, email, telefone_fixo, telefone_celular, whatsapp, status, qtde_beneficiarios, plano_atual, criado_em, criado_por, afiliado_id, detalhes
				FROM leads WHERE id = :id';
        $statement = $this->database->prepare($query);
        $statement->bindParam('id', $userId);
        $statement->execute();
        $lead = $statement->fetchObject(\App\Entity\Lead::class);
        if (! $lead) {
            throw new Lead('Lead não encontrado.', 404);
        }

        return $lead;
    }

    public function checkLeadByCpf(string $cep): void
    {
        $query = 'SELECT * FROM leads WHERE cep = :cep';
        $statement = $this->database->prepare($query);
        $statement->bindParam('cep', $cep);
        $statement->execute();
        $lead= $statement->fetchObject();
        if ($lead) {
            throw new Lead('CEP já cadastrado.', 400);
        }
    }

    public function getLeadByPage(
        int $page,
        int $perPage,
        ?string $nome,
        ?string $cpf,
        ?string $endereco,
        ?string $cidade,
        ?string $estado,
        ?string $cep,
        ?string $contato,
        ?string $email,
        ?string $telefone_fixo,
        ?string $telefone_celular,
        ?string $whatsapp,
        ?string $status,
        ?string $qtde_beneficiarios,
        ?string $plano_atual,
        ?string $detalhes,
        ?int $afiliado_id
    ): array {
        $params = [
            'nome' => is_null($nome) ? '' : $nome,
            'cpf' => is_null($cpf) ? '' : $cpf,
            'endereco' => is_null($endereco) ? '' : $endereco,
            'cidade' => is_null($cidade) ? '' : $cidade,
            'estado' => is_null($estado) ? '' : $estado,
            'cep' => is_null($cep) ? '' : $cep,
            'contato' => is_null($contato) ? '' : $contato,
            'email' => is_null($email) ? '' : $email,
            'telefone_fixo' => is_null($telefone_fixo) ? '' : $telefone_fixo,
            'telefone_celular' => is_null($telefone_celular) ? '' : $telefone_celular,
            'whatsapp' => is_null($whatsapp) ? '' : $whatsapp,
			'status' => is_null($status) ? '' : $status,
			'qtde_beneficiarios' => is_null($qtde_beneficiarios) ? '' : $qtde_beneficiarios,
			'plano_atual' => is_null($plano_atual) ? '' : $plano_atual,
            'detalhes' => is_null($detalhes) ? '' : $detalhes,
            'afiliado_id' => is_null($afiliado_id) ? 0 : $afiliado_id,
        ];

		if(!isset($afiliado_id) || $afiliado_id == 0){
			$query = "
				SELECT id, nome, cpf, endereco, cidade, estado, cep, contato, email, telefone_fixo, telefone_celular, whatsapp, status, qtde_beneficiarios, plano_atual, criado_em, criado_por, afiliado_id, detalhes
				FROM leads
				WHERE nome LIKE CONCAT('%', :nome, '%')
				AND cpf LIKE CONCAT('%', :cpf, '%')
				AND (endereco LIKE CONCAT('%', :endereco, '%') OR TRIM(endereco) IS NULL)
				AND (cidade LIKE CONCAT('%', :cidade, '%') OR TRIM(cidade) IS NULL)
				AND (estado LIKE CONCAT('%', :estado, '%') OR TRIM(estado) IS NULL)
				AND (cep LIKE CONCAT('%', :cep, '%') OR TRIM(cep) IS NULL)
				AND (contato LIKE CONCAT('%', :contato, '%') OR contato IS NULL)
				AND (email LIKE CONCAT('%', :email, '%') OR email IS NULL)
				AND (telefone_fixo LIKE CONCAT('%', :telefone_fixo, '%') OR telefone_fixo IS NULL)
				AND (telefone_celular LIKE CONCAT('%', :telefone_celular, '%') OR telefone_celular IS NULL)
				AND (whatsapp LIKE CONCAT('%', :whatsapp, '%') OR whatsapp IS NULL)
				AND (status LIKE CONCAT('%', :status, '%') OR status IS NULL)
				AND (qtde_beneficiarios LIKE CONCAT('%', :qtde_beneficiarios, '%') OR qtde_beneficiarios IS NULL)
				AND (plano_atual LIKE CONCAT('%', :plano_atual, '%') OR plano_atual IS NULL)
				AND (detalhes LIKE CONCAT('%', :detalhes, '%') OR detalhes IS NULL)
				AND (coalesce(`afiliado_id`, 0) = coalesce(:afiliado_id, 0)	OR 1 = 1 )
				ORDER BY id
			";
		}else{
			$query = "
				SELECT id, nome, cpf, endereco, cidade, estado, cep, contato, email, telefone_fixo, telefone_celular, whatsapp, status, qtde_beneficiarios, plano_atual, criado_em, criado_por, afiliado_id, detalhes
				FROM leads
				WHERE nome LIKE CONCAT('%', :nome, '%')
				AND cpf LIKE CONCAT('%', :cpf, '%')
				AND endereco LIKE CONCAT('%', :endereco, '%')
				AND (cidade LIKE CONCAT('%', :cidade, '%') OR cidade IS NULL)
				AND (estado LIKE CONCAT('%', :estado, '%') OR estado IS NULL)
				AND (cep LIKE CONCAT('%', :cep, '%') OR cep IS NULL)
				AND (contato LIKE CONCAT('%', :contato, '%') OR contato IS NULL)
				AND (email LIKE CONCAT('%', :email, '%') OR email IS NULL)
				AND (telefone_fixo LIKE CONCAT('%', :telefone_fixo, '%') OR telefone_fixo IS NULL)
				AND (telefone_celular LIKE CONCAT('%', :telefone_celular, '%') OR telefone_celular IS NULL)
				AND (whatsapp LIKE CONCAT('%', :whatsapp, '%') OR whatsapp IS NULL)
				AND (status LIKE CONCAT('%', :status, '%') OR status IS NULL)
				AND (qtde_beneficiarios LIKE CONCAT('%', :qtde_beneficiarios, '%') OR qtde_beneficiarios IS NULL)
				AND (plano_atual LIKE CONCAT('%', :plano_atual, '%') OR plano_atual IS NULL)
				AND (detalhes LIKE CONCAT('%', :detalhes, '%') OR detalhes IS NULL)
				AND coalesce(`afiliado_id`, 0) = coalesce(:afiliado_id, 0)
				ORDER BY id
			";
		}

        $statement = $this->database->prepare($query);
        $statement->bindParam('nome', $nome);
        $statement->bindParam('cpf', $cpf);
        $statement->bindParam('endereco', $endereco);
        $statement->bindParam('cidade', $cidade);
        $statement->bindParam('estado', $estado);
        $statement->bindParam('cep', $cep);
        $statement->bindParam('contato', $contato);
        $statement->bindParam('email', $email);
        $statement->bindParam('telefone_fixo', $telefone_fixo);
        $statement->bindParam('telefone_celular', $telefone_celular);
        $statement->bindParam('whatsapp', $whatsapp);
        $statement->bindParam('status', $status);
        $statement->bindParam('qtde_beneficiarios', $qtde_beneficiarios);
        $statement->bindParam('plano_atual', $plano_atual);
        $statement->bindParam('detalhes', $detalhes);
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

    public function getQueryLeadByPage(): string
    {
        return "
            SELECT id, nome, cpf, endereco, cidade, estado, cep, email, telefone_fixo, telefone_celular, whatsapp, status, criado_em, criado_por, afiliado_id, detalhes
            FROM leads
            WHERE nome LIKE CONCAT('%', :nome, '%')
            AND cpf LIKE CONCAT('%', :cpf, '%')
            AND endereco LIKE CONCAT('%', :endereco, '%')
            AND (cidade LIKE CONCAT('%', :cidade, '%') OR cidade IS NULL)
            AND (estado LIKE CONCAT('%', :estado, '%') OR estado IS NULL)
            AND (cep LIKE CONCAT('%', :cep, '%') OR cep IS NULL)
            AND (email LIKE CONCAT('%', :email, '%') OR email IS NULL)
            AND (telefone_fixo LIKE CONCAT('%', :telefone_fixo, '%') OR telefone_fixo IS NULL)
            AND (telefone_celular LIKE CONCAT('%', :telefone_celular, '%') OR telefone_celular IS NULL)
            AND (whatsapp LIKE CONCAT('%', :whatsapp, '%') OR whatsapp IS NULL)
            AND (status LIKE CONCAT('%', :status, '%') OR status IS NULL)
            AND (detalhes LIKE CONCAT('%', :detalhes, '%') OR detalhes IS NULL)
			AND coalesce(`afiliado_id`, 0) = coalesce(:afiliado_id, 0)
            ORDER BY id
        ";
    }

    public function getAll(): array
    {
        $query = 'SELECT id, nome, cpf, endereco, cidade, estado, cep, contato, email, telefone_fixo, telefone_celular, whatsapp, status, qtde_beneficiarios, plano_atual, criado_em, criado_por, afiliado_id, detalhes
					FROM leads ORDER BY id';
        $statement = $this->database->prepare($query);
        $statement->execute();

        return $statement->fetchAll();
    }

	public function getLog(int $lead_id): array
    {
        $query = 'SELECT lead_id, status, comentarios, motivo, log_em
					FROM leads_log WHERE lead_id = :lead_id ORDER BY log_em ASC';
        $statement = $this->database->prepare($query);
		$statement->bindParam('lead_id', $lead_id);
        $statement->execute();

        return $statement->fetchAll();
    }

    public function create(\App\Entity\Lead $lead, $afiliado_id): \App\Entity\Lead
    {
        $query = '
            INSERT INTO leads
                (nome, cpf, endereco, cidade, estado, cep, contato, email, telefone_fixo, telefone_celular, whatsapp, status, qtde_beneficiarios, plano_atual, afiliado_id, detalhes)
            VALUES
                (:nome, :cpf, :endereco, :cidade, :estado, :cep, :contato, :email, :telefone_fixo, :telefone_celular, :whatsapp, :status, :qtde_beneficiarios, :plano_atual, :afiliado_id, :detalhes)
        ';
        $statement = $this->database->prepare($query);

		$nome = $lead->getNome();
        $cpf= $lead->getCpf();
        $endereco = $lead->getEndereco();
        $cidade= $lead->getCidade();
        $estado = $lead->getEstado();
        $cep = $lead->getCep();
        $contato = $lead->getContato();
        $email = $lead->getEmail();
        $telefone_fixo = $lead->getTelefoneFixo();
        $telefone_celular = $lead->getTelefoneCelular();
        $whatsapp = $lead->getWhatsapp();
        $status = 'Novo';
        $qtde_beneficiarios = $lead->getQtdeBeneficiarios();
        $plano_atual = $lead->getPlanoAtual();
        $afiliado_id = $lead->getAfiliadoId();
        $detalhes = $lead->getDetalhes();

        $statement->bindParam('nome', $nome);
        $statement->bindParam('cpf', $cpf);
        $statement->bindParam('endereco', $endereco);
        $statement->bindParam('cidade', $cidade);
        $statement->bindParam('estado', $estado);
        $statement->bindParam('cep', $cep);
        $statement->bindParam('contato', $contato);
        $statement->bindParam('email', $email);
        $statement->bindParam('telefone_fixo', $telefone_fixo);
        $statement->bindParam('telefone_celular', $telefone_celular);
        $statement->bindParam('whatsapp', $whatsapp);
        $statement->bindParam('status', $status);
        $statement->bindParam('qtde_beneficiarios', $qtde_beneficiarios);
        $statement->bindParam('plano_atual', $plano_atual);
        $statement->bindParam('afiliado_id', $afiliado_id);
        $statement->bindParam('detalhes', $detalhes);
        $statement->execute();

        return $this->getLead((int) $this->database->lastInsertId());
    }
	
	public function getUpload($lead_id)
    {
        $query = 'SELECT id, lead_id, date_created, file
					FROM leads_uploads WHERE lead_id = :lead_id';
        $statement = $this->database->prepare($query);
		$statement->bindParam('lead_id', $lead_id);
        $statement->execute();

        return $statement->fetchAll();
    }
	
	public function upload($file, $lead_id)
    {
        $query = '
            INSERT INTO leads_uploads
                (lead_id, date_created, file)
            VALUES
                (:lead_id, NOW(), :filename)
        ';
        $statement = $this->database->prepare($query);

        $statement->bindParam('lead_id', $lead_id);
        $statement->bindParam('filename', $file);
        $statement->execute();

        return (int) $this->database->lastInsertId();
    }

    public function update(\App\Entity\Lead $lead): \App\Entity\Lead
    {
        $query = '
            UPDATE leads
			SET nome = :nome,
				cpf = :cpf,
				endereco = :endereco,
				cidade = :cidade,
				estado = :estado,
				cep = :cep,
				contato = :contato,
				email = :email,
				telefone_fixo = :telefone_fixo,
				telefone_celular = :telefone_celular,
				whatsapp = :whatsapp,				
				qtde_beneficiarios = :qtde_beneficiarios,
				plano_atual = :plano_atual,
				detalhes = :detalhes
			WHERE id = :id
        ';
        $statement = $this->database->prepare($query);
        $id = $lead->getId();
        $nome = $lead->getNome();
        $cpf= $lead->getCpf();
        $endereco = $lead->getEndereco();
        $cidade= $lead->getCidade();
        $estado = $lead->getEstado();
        $cep = $lead->getCep();
		$contato = $lead->getContato();
        $email = $lead->getEmail();
        $telefone_fixo = $lead->getTelefoneFixo();
        $telefone_celular = $lead->getTelefoneCelular();
        $whatsapp = $lead->getWhatsapp();        
		$qtde_beneficiarios = $lead->getQtdeBeneficiarios();
        $plano_atual = $lead->getPlanoAtual();
        $detalhes = $lead->getDetalhes();

        $statement->bindParam('id', $id);
        $statement->bindParam('nome', $nome);
        $statement->bindParam('cpf', $cpf);
        $statement->bindParam('endereco', $endereco);
        $statement->bindParam('cidade', $cidade);
        $statement->bindParam('estado', $estado);
        $statement->bindParam('cep', $cep);
		$statement->bindParam('contato', $contato);
        $statement->bindParam('email', $email);
        $statement->bindParam('telefone_fixo', $telefone_fixo);
        $statement->bindParam('telefone_celular', $telefone_celular);
        $statement->bindParam('whatsapp', $whatsapp);        
		$statement->bindParam('qtde_beneficiarios', $qtde_beneficiarios);
        $statement->bindParam('plano_atual', $plano_atual);
        $statement->bindParam('detalhes', $detalhes);
        $statement->execute();

        return $this->getLead((int) $id);
    }

	public function updateStatus(\App\Entity\LeadStatus $lead): \App\Entity\Lead
    {
        $query = '
            UPDATE leads
			SET status = :status
			WHERE id = :id
        ';
        $statement = $this->database->prepare($query);
        $id = $lead->getId();
        $status = $lead->getStatus();

        $statement->bindParam('id', $id);
        $statement->bindParam('status', $status);
        $statement->execute();

		$query = '
            INSERT INTO leads_log
                (lead_id, status, comentarios, motivo)
            VALUES
                (:lead_id, :status, :comentarios, :motivo)
        ';
        $statement = $this->database->prepare($query);

		$id = $lead->getId();
        $status = $lead->getStatus();
        $comentarios = $lead->getComentarios();
        $motivo = $lead->getMotivo();

        $statement->bindParam('lead_id', $id);
        $statement->bindParam('status', $status);
        $statement->bindParam('comentarios', $comentarios);
        $statement->bindParam('motivo', $motivo);
        $statement->execute();

        return $this->getLead((int) $id);
    }

    public function delete(int $leadId): void
    {
        $query = 'DELETE FROM leads WHERE id = :id';
        $statement = $this->database->prepare($query);
        $statement->bindParam('id', $leadId);
        $statement->execute();
    }
}
