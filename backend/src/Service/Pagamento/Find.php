<?php

declare(strict_types=1);

namespace App\Service\Pagamento;

final class Find extends Base
{
    public function getPagamentoByPage(
        int $page,
        int $perPage,
        ?string $data_pagamento,
        ?float $comissao_afiliado,
        ?float $valor_pagamento,
        ?string $comentarios,
		?int $afiliado_id		
    ): array {
        if ($page < 1) {
            $page = 1;
        }
        if ($perPage < 1) {
            $perPage = self::DEFAULT_PER_PAGE_PAGINATION;
        }

        return $this->pagamentoRepository->getPagamentoByPage(
            $page,
            $perPage,            
			$data_pagamento,
			$comissao_afiliado,
			$valor_pagamento,
			$comentarios,
			$afiliado_id
        );
    }

    public function getAll(): array
    {
        return $this->pagamentoRepository->getAll();
    }

    public function getOne(int $pagamentoId): array
    {
        return $this->pagamentoRepository->getLog($pagamentoId);
    }
}
