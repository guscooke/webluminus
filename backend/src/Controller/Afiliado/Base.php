<?php

declare(strict_types=1);

namespace App\Controller\Afiliado;

use App\Controller\BaseController;
use App\Exception\Afiliado;
use App\Service\Afiliado\Create;
use App\Service\Afiliado\Delete;
use App\Service\Afiliado\Find;
use App\Service\Afiliado\Update;
use App\Service\Afiliado\Login;

abstract class Base extends BaseController
{
    protected function getFindAfiliadoService(): Find
    {
        return $this->container->get('find_afiliado_service');
    }

    protected function getCreateAfiliadoService(): Create
    {
        return $this->container->get('create_afiliado_service');
    }

    protected function getUpdateAfiliadoService(): Update
    {
        return $this->container->get('update_afiliado_service');
    }

    protected function getDeleteAfiliadoService(): Delete
    {
        return $this->container->get('delete_afiiado_service');
    }
	
	protected function getLoginAfiliadoService(): Login
    {
        return $this->container->get('login_afiliado_service');
    }

    protected function checkAfiliadoPermissions(int $userId, int $userIdLogged): void
    {
        /*if ($userId !== $userIdLogged) {
            throw new Admin('Admin permission failed.', 400);
        }*/
    }

    protected function getAndValidateAfiliadoId(array $input): int
    {
        if (isset($input['decoded']) && isset($input['decoded']->sub)) {
            return (int) $input['decoded']->sub;
        }

        //throw new Afiliado('Invalid afiliado. Permission failed.', 400);
    }
}
