<?php

declare(strict_types=1);

namespace App\Service\Lead;

use App\Exception\Lead;

final class Upload extends Base
{
    public function upload(array $input, $lead_id): string
    {
        //$data = $this->validateLeadData($input);
        /** @var \App\Entity\Admin $admin */
		
		$target = "uploads/";
		$target = $target . basename( $_FILES['file']['name']);
		
		if(move_uploaded_file($_FILES['file']['tmp_name'], $target)) {
			$lead= $this->leadRepository->upload($_FILES['file']['name'], $lead_id);
		} else {
			throw new Lead('Não foi possível fazer o upload do arquivo.', 400);
		}

        return 'ok';
    }

    private function validateLeadData(array $input): \App\Entity\Lead
    {
        $lead = json_decode((string) json_encode($input), false);
        if (! isset($lead->nome)) {
            throw new Lead('O campo nome é obrigatório.', 400);
        }
        if (! isset($lead->cpf)) {
            throw new Lead('O campo CNPJ é obrigatório.', 400);
        }        
		
        $item = new \App\Entity\Lead();
        
		$item->updateNome($lead->nome);
		$item->updateCpf($lead->cpf);
		$item->updateEndereco($lead->endereco);
		$item->updateCidade($lead->cidade);
		$item->updateEstado($lead->estado);
		$item->updateCep($lead->cep);
		$item->updateContato($lead->contato);
		$item->updateEmail($lead->email);
		$item->updateTelefoneFixo($lead->telefone_fixo);
		$item->updateTelefoneCelular($lead->telefone_celular);
		$item->updateWhatsapp($lead->whatsapp);
		$item->updateStatus($lead->status);		
		$item->updateQtdeBeneficiarios($lead->qtde_beneficiarios);		
		$item->updatePlanoAtual($lead->plano_atual);		
		$item->updateAfiliadoId($lead->afiliado_id);
		$item->updateDetalhes($lead->detalhes);
		
		
        $this->leadRepository->checkLeadByCpf($lead->cpf);

        return $item;
    }
}
