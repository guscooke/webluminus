<?php

declare(strict_types=1);

namespace App\Service\Afiliado;

final class Delete extends Base
{
    public function delete(int $afiliadoId): void
    {
        $this->getAfiliadoFromDb($afiliadoId);        
        $this->afiliadoRepository->delete($afiliadoId);        
    }
}
