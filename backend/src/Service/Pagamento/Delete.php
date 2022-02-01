<?php

declare(strict_types=1);

namespace App\Service\Pagamento;

final class Delete extends Base
{
    public function delete(int $pagamentoId): void
    {
        $this->getPagamentoFromDb($pagamentoId);        
        $this->pagamentoRepository->delete($pagamentoId);        
    }
}
