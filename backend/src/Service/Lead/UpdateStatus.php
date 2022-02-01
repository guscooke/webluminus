<?php

declare(strict_types=1);

namespace App\Service\Lead;

use App\Exception\Lead;

final class UpdateStatus extends Base
{
    public function updateStatus(array $input, int $leadId): object
    {	
		$lead = $this->validateLeadData($input, $leadId);
        
        $leads = $this->leadRepository->updateStatus($lead);

        return $leads->getData();
    }

    public function validateLeadData(array $input, int $leadId): object
    {
        $lead = json_decode((string) json_encode($input), false);
		
		$item = new \App\Entity\LeadStatus();
        
		$item->updateId($leadId);
		$item->updateStatus($lead->status);
		$item->updateComentarios($lead->comentarios);
		$item->updateMotivo($lead->motivo);
		$item->updateLembreteRetorno($lead->lembrete_retorno);
		$item->updateFileUploaded($lead->file_uploaded);
		$item->updateValorCotacao($lead->valor_cotacao);
        return $item;
    }
}
