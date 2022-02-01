<?php

declare(strict_types=1);

namespace App\Service\Lead;

use App\Exception\Lead;

final class Create extends Base
{
    public function create(array $input, $afiliado_id): object
    {
        $data = $this->validateLeadData($input);
        /** @var \App\Entity\Admin $admin */
        $lead= $this->leadRepository->create($data, $afiliado_id);
        

        return $lead->getData();
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
