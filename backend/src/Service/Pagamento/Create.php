<?php

declare(strict_types=1);

namespace App\Service\Pagamento;

use App\Exception\Pagamento;

final class Create extends Base
{
    public function create(array $input, int $leadId): object
    {
        
		$leadId = intval($leadId);
		
		$data = $this->validatePagamentoData($input, $leadId);        
        $pagamento= $this->pagamentoRepository->create($data, $leadId);

        return $pagamento->getData();
    }

    private function validatePagamentoData(array $input, int $leadId): \App\Entity\Pagamento
    {
        $pagamento = json_decode((string) json_encode($input), false);
		
        $item = new \App\Entity\Pagamento();
        
		$item->updateLeadId($leadId);
		$item->updateDataPagamento($pagamento->data_pagamento);
		$item->updateComissaoAfiliado($pagamento->comissao_afiliado);
		$item->updateValorPagamento($pagamento->valor_pagamento);
		$item->updateComentarios($pagamento->comentarios);

        return $item;
    }
}
