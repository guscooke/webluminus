<?php

declare(strict_types=1);

namespace App\Service\Lead;

use App\Exception\Lead;
use App\Repository\LeadRepository;
use App\Service\BaseService;
use App\Service\RedisService;
use Respect\Validation\Validator as v;

abstract class Base extends BaseService
{
    private const REDIS_KEY = 'lead:%s';

    /** @var AdminRepository */
    protected $leadRepository;

    /** @var RedisService */
    protected $redisService;

    public function __construct(
        LeadRepository $leadRepository,
        RedisService $redisService
    ) {
        $this->leadRepository = $leadRepository;
        $this->redisService = $redisService;
    }

    protected function getLeadFromDb(int $leadId): \App\Entity\Lead
    {
        return $this->leadRepository->getLead($leadId);
    }
}
