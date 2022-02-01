<?php

declare(strict_types=1);

namespace App\Service\Afiliado;

use App\Exception\Afiliado;
use App\Repository\AfiliadoRepository;
use App\Service\BaseService;
use App\Service\RedisService;
use Respect\Validation\Validator as v;

abstract class Base extends BaseService
{
    private const REDIS_KEY = 'afiiado:%s';

    /** @var AdminRepository */
    protected $afiliadoRepository;

    /** @var RedisService */
    protected $redisService;

    public function __construct(
        AfiliadoRepository $afiliadoRepository,
        RedisService $redisService
    ) {
        $this->afiliadoRepository = $afiliadoRepository;
        $this->redisService = $redisService;
    }

    protected function getAfiliadoFromDb(int $afiliadoId): \App\Entity\Afiliado
    {
        return $this->afiliadoRepository->getAfiliado($afiliadoId);
    }
}
