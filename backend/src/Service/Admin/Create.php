<?php

declare(strict_types=1);

namespace App\Service\Admin;

use App\Exception\Admin;

final class Create extends Base
{
    public function create(array $input): object
    {
        $data = $this->validateAdminData($input);
        /** @var \App\Entity\Admin $admin */
        $admin = $this->adminRepository->create($data);
        if (self::isRedisEnabled() === true) {
            $this->saveInCache((int) $admin->getId(), $admin->getData());
        }

        return $admin->getData();
    }

    private function validateAdminData(array $input): \App\Entity\Admin
    {
        $admin = json_decode((string) json_encode($input), false);
        if (! isset($admin->nome)) {
            throw new Admin('The field "nome" is required.', 400);
        }
        if (! isset($admin->email)) {
            throw new Admin('The field "email" is required.', 400);
        }
        if (! isset($admin->password)) {
            throw new Admin('The field "password" is required.', 400);
        }
		if (! isset($admin->ativo)) {
            throw new Admin('The field "ativo" is required.', 400);
        }
        $myuser = new \App\Entity\Admin();
        $myuser->updateName(self::validateAdminName($admin->nome));
        $myuser->updateEmail(self::validateEmail($admin->email));
        $myuser->updatePassword(hash('sha512', $admin->password));
        $myuser->updateAtivo(self::validateAtivo($admin->ativo));
        $this->adminRepository->checkAdminByEmail($admin->email);

        return $myuser;
    }
}
