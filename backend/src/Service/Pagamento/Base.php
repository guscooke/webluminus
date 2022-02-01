<?php

declare(strict_types=1);

namespace App\Service\Pagamento;

use App\Exception\Pagamento;
use App\Repository\PagamentoRepository;
use App\Service\BaseService;
use App\Service\RedisService;
use Respect\Validation\Validator as v;

abstract class Base extends BaseService
{
    private const REDIS_KEY = 'pagamento:%s';

    /** @var AdminRepository */
    protected $pagamentoRepository;

    /** @var RedisService */
    protected $redisService;

    public function __construct(
        PagamentoRepository $pagamentoRepository,
        RedisService $redisService
    ) {
        $this->pagamentoRepository = $pagamentoRepository;
        $this->redisService = $redisService;
    }

    protected function getPagamentoFromDb(int $pagamentoId): \App\Entity\Pagamento
    {
        return $this->pagamentoRepository->getPagamento($pagamentoId);
    }
}
