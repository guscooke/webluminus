<?php

declare(strict_types=1);

namespace App\Controller\Pagamento;

use App\Controller\BaseController;
use App\Exception\Pagamento;
use App\Service\Pagamento\Create;
use App\Service\Pagamento\Delete;
use App\Service\Pagamento\Find;
use App\Service\Pagamento\Update;

abstract class Base extends BaseController
{
    protected function getFindPagamentoService(): Find
    {
        return $this->container->get('find_pagamento_service');
    }

    protected function getCreatePagamentoService(): Create
    {
        return $this->container->get('create_pagamento_service');
    }

    protected function getUpdatePagamentoService(): Update
    {
        return $this->container->get('update_pagamento_service');
    }

    protected function getDeletePagamentoService(): Delete
    {
        return $this->container->get('delete_pagamento_service');
    }

    protected function checkPagamentoPermissions(int $userId, int $userIdLogged): void
    {
        /*if ($userId !== $userIdLogged) {
            throw new Admin('Admin permission failed.', 400);
        }*/
    }

    protected function getAndValidatePagamentoId(array $input): int
    {
        if (isset($input['decoded']) && isset($input['decoded']->sub)) {
            return (int) $input['decoded']->sub;
        }

        //throw new Pagamento('Invalid afiliado. Permission failed.', 400);
    }
}
