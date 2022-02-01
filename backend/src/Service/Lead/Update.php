<?php

declare(strict_types=1);

namespace App\Service\Lead;

use App\Exception\Lead;

final class Update extends Base
{
    public function update(array $input, int $leadId): object
    {
        $lead = $this->validateLeadData($input, $leadId);
        
        $leads = $this->leadRepository->update($lead);

        return $leads->getData();
    }

    public function validateLeadData(array $input, int $leadId): object
    {
        $lead = $this->getLeadFromDb($leadId);
        $data = json_decode((string) json_encode($input), false);
        if (! isset($data->nome) && ! isset($data->cpf) ) {
            throw new Lead('Informe os dados para atualizar.', 400);
        }
        /*if (isset($data->nome)) {
            $admin->updateName(self::validateAdminName($data->nome));
        }
        if (isset($data->email)) {
            $admin->updateEmail(self::validateEmail($data->email));
        }*/
		
		$lead->updateNome($data->nome);
		$lead->updateCpf($data->cpf);
		$lead->updateEndereco($data->endereco);
		$lead->updateCidade($data->cidade);
		$lead->updateEstado($data->estado);
		$lead->updateCep($data->cep);
		$lead->updateContato($data->contato);
		$lead->updateEmail($data->email);
		$lead->updateTelefoneFixo($data->telefone_fixo);
		$lead->updateTelefoneCelular($data->telefone_celular);
		$lead->updateWhatsapp($data->whatsapp);
		$lead->updateStatus($data->status);	
		$lead->updateQtdeBeneficiarios($data->qtde_beneficiarios);		
		$lead->updatePlanoAtual($data->plano_atual);				
		$lead->updateDetalhes($data->detalhes);		

        return $lead;
    }
}
