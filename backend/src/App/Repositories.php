<?php

declare(strict_types=1);

use App\Repository\AdminRepository;
use App\Repository\AfiliadoRepository;
use App\Repository\LeadRepository;
use App\Repository\LeadStatusRepository;
use App\Repository\PagamentoRepository;
use Psr\Container\ContainerInterface;

$container['admin_repository'] = static function (
    ContainerInterface $container
): AdminRepository {
    return new AdminRepository($container->get('db'));
};

$container['afiliado_repository'] = static function (
    ContainerInterface $container
):AfiliadoRepository {
    return new AfiliadoRepository($container->get('db'));
};

$container['lead_repository'] = static function (
    ContainerInterface $container
):LeadRepository {
    return new LeadRepository($container->get('db'));
};

$container['pagamento_repository'] = static function (
    ContainerInterface $container
):PagamentoRepository {
    return new PagamentoRepository($container->get('db'));
};
