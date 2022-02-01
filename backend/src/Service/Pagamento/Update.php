<?php

declare(strict_types=1);

namespace App\Service\Pagamento;

use App\Exception\Pagamento;

final class Update extends Base
{
    public function update(array $input, int $pagamentoId): object
    {
        $pagamento = $this->validatePagamentoData($input, $pagamentoId);
        
        $pagamentos = $this->pagamentoRepository->update($pagamento);

        return $pagamentos->getData();
    }

    public function validatePagamentoData(array $input, int $pagamentoId): object
    {
        $pagamento = $this->getPagamentoFromDb($pagamentoId);
        $data = json_decode((string) json_encode($input), false);
        
        /*if (isset($data->nome)) {
            $admin->updateName(self::validateAdminName($data->nome));
        }
        if (isset($data->email)) {
            $admin->updateEmail(self::validateEmail($data->email));
        }*/
		
		$item->updatePagamentoId($pagamento->pagamento_id);
		$item->updateDataPagamento($pagamento->data_pagamento);
		$item->updateComissaoAfiliado($pagamento->comissao_afiliado);
		$item->updateValorPagamento($pagamento->valor_pagamento);
		$item->updateComentarios($pagamento->comentarios);	

        return $item;
    }
}
