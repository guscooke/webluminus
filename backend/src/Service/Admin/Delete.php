<?php

declare(strict_types=1);

namespace App\Service\Admin;

final class Delete extends Base
{
    public function delete(int $adminId): void
    {
        $this->getAdminFromDb($adminId);        
        $this->adminRepository->delete($adminId);
        if (self::isRedisEnabled() === true) {
            $this->deleteFromCache($adminId);
        }
    }
}
