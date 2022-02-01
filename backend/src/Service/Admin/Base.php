<?php

declare(strict_types=1);

namespace App\Service\Admin;

use App\Exception\Admin;
use App\Repository\AdminRepository;
use App\Service\BaseService;
use App\Service\RedisService;
use Respect\Validation\Validator as v;

abstract class Base extends BaseService
{
    private const REDIS_KEY = 'admin:%s';

    /** @var AdminRepository */
    protected $adminRepository;

    /** @var RedisService */
    protected $redisService;

    public function __construct(
        AdminRepository $adminRepository,
        RedisService $redisService
    ) {
        $this->adminRepository = $adminRepository;
        $this->redisService = $redisService;
    }

    protected static function validateAdminName(string $nome): string
    {
        return $nome;
    }

    protected static function validateEmail(string $emailValue): string
    {
        $email = filter_var($emailValue, FILTER_SANITIZE_EMAIL);
        if (! v::email()->validate($email)) {
            throw new User('Invalid email', 400);
        }

        return (string) $email;
    }
	
	protected static function validateAtivo(string $ativo): string
    {
        return $ativo;
    }

    protected function getAdminFromDb(int $adminId): \App\Entity\Admin
    {
        return $this->adminRepository->getAdmin($adminId);
    }
}
