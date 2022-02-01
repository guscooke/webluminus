<?php

declare(strict_types=1);

namespace App\Controller\Admin;

use App\Controller\BaseController;
use App\Exception\Admin;
use App\Service\Admin\Create;
use App\Service\Admin\Delete;
use App\Service\Admin\Find;
use App\Service\Admin\Login;
use App\Service\Admin\Update;

abstract class Base extends BaseController
{
    protected function getFindAdminService(): Find
    {
        return $this->container->get('find_admin_service');
    }

    protected function getCreateAdminService(): Create
    {
        return $this->container->get('create_admin_service');
    }

    protected function getUpdateAdminService(): Update
    {
        return $this->container->get('update_admin_service');
    }

    protected function getDeleteAdminService(): Delete
    {
        return $this->container->get('delete_admin_service');
    }

    protected function getLoginAdminService(): Login
    {
        return $this->container->get('login_admin_service');
    }

    protected function checkAdminPermissions(int $userId, int $userIdLogged): void
    {
        /*if ($userId !== $userIdLogged) {
            throw new Admin('Admin permission failed.', 400);
        }*/
    }

    protected function getAndValidateUserId(array $input): int
    {
        if (isset($input['decoded']) && isset($input['decoded']->sub)) {
            return (int) $input['decoded']->sub;
        }

        throw new Admin('Invalid admin. Permission failed.', 400);
    }
}
