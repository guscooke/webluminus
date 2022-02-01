<?php

declare(strict_types=1);

namespace App\Service\Admin;

use App\Exception\Admin;

final class Update extends Base
{
    public function update(array $input, int $adminId): object
    {
        $admin = $this->validateAdminData($input, $adminId);
        /** @var \App\Entity\Admin $admins */
        $admins = $this->adminRepository->update($admin);
        if (self::isRedisEnabled() === true) {
            $this->saveInCache((int) $admins->getId(), $admins->getData());
        }

        return $admins->getData();
    }

    public function validateAdminData(array $input, int $adminId): object
    {
        $admin = $this->getAdminFromDb($adminId);
        $data = json_decode((string) json_encode($input), false);
        if (! isset($data->nome) && ! isset($data->email)) {
            throw new Admin('Enter the data to update the user.', 400);
        }
        if (isset($data->nome)) {
            $admin->updateName(self::validateAdminName($data->nome));
        }
        if (isset($data->email)) {
            $admin->updateEmail(self::validateEmail($data->email));
        }		
		if (isset($data->ativo)) {
            $admin->updateAtivo(self::validateAtivo($data->ativo));
        }
		if (isset($data->password)) {
            $admin->updatePassword($data->password);
        }
		if (isset($data->afiliado_id)) {
            $admin->updateAfiliadoId($data->afiliado_id);
        }

        return $admin;
    }
}
