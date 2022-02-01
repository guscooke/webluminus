<?php

declare(strict_types=1);

use App\Service\Note;
use App\Service\Task\TaskService;
use App\Service\Admin;
use App\Service\Afiliado;
use App\Service\Lead;
use App\Service\Pagamento;
use Psr\Container\ContainerInterface;

/************************
** ADMIN
*************************/

$container['find_admin_service'] = static function (
    ContainerInterface $container
): Admin\Find {
    return new Admin\Find(
        $container->get('admin_repository'),
        $container->get('redis_service')
    );
};

$container['create_admin_service'] = static function (
    ContainerInterface $container
): Admin\Create {
    return new Admin\Create(
        $container->get('admin_repository'),
        $container->get('redis_service')
    );
};

$container['update_admin_service'] = static function (
    ContainerInterface $container
): Admin\Update {
    return new Admin\Update(
        $container->get('admin_repository'),
        $container->get('redis_service')
    );
};

$container['delete_admin_service'] = static function (
    ContainerInterface $container
): Admin\Delete {
    return new Admin\Delete(
        $container->get('admin_repository'),
        $container->get('redis_service')
    );
};

$container['login_admin_service'] = static function (
    ContainerInterface $container
): Admin\Login {
    return new Admin\Login(
        $container->get('admin_repository'),
        $container->get('redis_service')
    );
};


/************************
** AFILIADO
*************************/

$container['find_afiliado_service'] = static function (
    ContainerInterface $container
): Afiliado\Find {
    return new Afiliado\Find(
        $container->get('afiliado_repository'),
        $container->get('redis_service')
    );
};

$container['create_afiliado_service'] = static function (
    ContainerInterface $container
): Afiliado\Create {
    return new Afiliado\Create(
        $container->get('afiliado_repository'),
        $container->get('redis_service')
    );
};

$container['update_afiliado_service'] = static function (
    ContainerInterface $container
): Afiliado\Update {
    return new Afiliado\Update(
        $container->get('afiliado_repository'),
        $container->get('redis_service')
    );
};

$container['delete_afiliado_service'] = static function (
    ContainerInterface $container
): Afiliado\Delete {
    return new Afiliado\Delete(
        $container->get('afiliado_repository'),
        $container->get('redis_service')
    );
};

$container['login_afiliado_service'] = static function (
    ContainerInterface $container
): Afiliado\Login {
    return new Afiliado\Login(
        $container->get('afiliado_repository'),
        $container->get('redis_service')
    );
};

/************************
** LEADS
*************************/

$container['find_lead_service'] = static function (
    ContainerInterface $container
): Lead\Find {
    return new Lead\Find(
        $container->get('lead_repository'),
        $container->get('redis_service')
    );
};

$container['create_lead_service'] = static function (
    ContainerInterface $container
): Lead\Create {
    return new Lead\Create(
        $container->get('lead_repository'),
        $container->get('redis_service')
    );
};

$container['getupload_lead_service'] = static function (
    ContainerInterface $container
): Lead\GetUpload {
    return new Lead\GetUpload(
        $container->get('lead_repository'),
        $container->get('redis_service')
    );
};

$container['upload_lead_service'] = static function (
    ContainerInterface $container
): Lead\Upload {
    return new Lead\Upload(
        $container->get('lead_repository'),
        $container->get('redis_service')
    );
};

$container['update_lead_service'] = static function (
    ContainerInterface $container
): Lead\Update {
    return new Lead\Update(
        $container->get('lead_repository'),
        $container->get('redis_service')
    );
};

$container['update_leadstatus_service'] = static function (
    ContainerInterface $container
): Lead\UpdateStatus {
    return new Lead\UpdateStatus(
        $container->get('lead_repository'),
        $container->get('redis_service')
    );
};

$container['delete_lead_service'] = static function (
    ContainerInterface $container
): Lead\Delete {
    return new Lead\Delete(
        $container->get('lead_repository'),
        $container->get('redis_service')
    );
};

/************************
** PAGAMENTOS
*************************/

$container['find_pagamento_service'] = static function (
    ContainerInterface $container
): Pagamento\Find {
    return new Pagamento\Find(
        $container->get('pagamento_repository'),
        $container->get('redis_service')
    );
};

$container['create_pagamento_service'] = static function (
    ContainerInterface $container
): Pagamento\Create {
    return new Pagamento\Create(
        $container->get('pagamento_repository'),
        $container->get('redis_service')
    );
};

$container['update_pagamento_service'] = static function (
    ContainerInterface $container
): Pagamento\Update {
    return new Pagamento\Update(
        $container->get('pagamento_repository'),
        $container->get('redis_service')
    );
};

$container['delete_pagamento_service'] = static function (
    ContainerInterface $container
): Pagamento\Delete {
    return new Pagamento\Delete(
        $container->get('pagamento_repository'),
        $container->get('redis_service')
    );
};

$container['task_service'] = static function (
    ContainerInterface $container
): TaskService {
    return new TaskService(
        $container->get('task_repository'),
        $container->get('redis_service')
    );
};

$container['find_note_service'] = static function (
    ContainerInterface $container
): Note\Find {
    return new Note\Find(
        $container->get('note_repository'),
        $container->get('redis_service')
    );
};

$container['create_note_service'] = static function (
    ContainerInterface $container
): Note\Create {
    return new Note\Create(
        $container->get('note_repository'),
        $container->get('redis_service')
    );
};

$container['update_note_service'] = static function (
    ContainerInterface $container
): Note\Update {
    return new Note\Update(
        $container->get('note_repository'),
        $container->get('redis_service')
    );
};

$container['delete_note_service'] = static function (
    ContainerInterface $container
): Note\Delete {
    return new Note\Delete(
        $container->get('note_repository'),
        $container->get('redis_service')
    );
};
