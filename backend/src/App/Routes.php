<?php

declare(strict_types=1);

use App\Controller\Admin;
use App\Controller\Afiliado;
use App\Controller\Lead;
use App\Controller\Pagamento;
use App\Middleware\Auth;

/** @var \Slim\App $app */
$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
});

$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', '*')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
});

$app->get('/', 'App\Controller\DefaultController:getHelp');
$app->get('/status', 'App\Controller\DefaultController:getStatus');
$app->post('/api/email', \App\Controller\Admin\Email::class);
$app->post('/api/login', \App\Controller\Admin\Login::class);
$app->post('/api/loginafiliado', \App\Controller\Afiliado\Login::class);

$app->group('/api', function () use ($app): void {    

    $app->group('/admin', function () use ($app): void {
        $app->get('', Admin\GetAll::class);
        $app->get('/leadsafiliados', Admin\GetLeadsAfiliado::class);
        $app->get('/leadsstatus', Admin\GetLeadsStatus::class);
        $app->get('/pagamentosstatus', Admin\GetPagamentosStatus::class);
        $app->post('', Admin\Create::class);
        $app->get('/{id}', Admin\GetOne::class);
        $app->put('/{id}', Admin\Update::class);
        $app->delete('/{id}', Admin\Delete::class);	
    })->add(new Auth());
	
	$app->group('/afiliado', function () use ($app): void {
        $app->get('', Afiliado\GetAll::class);
        $app->post('', Afiliado\Create::class);
        $app->get('/{id}', Afiliado\GetOne::class);
        $app->put('/{id}', Afiliado\Update::class);
        $app->delete('/{id}', Afiliado\Delete::class);
	})->add(new Auth());
	
	$app->group('/lead', function () use ($app): void {
        $app->get('', Lead\GetAll::class);
        $app->get('/log/{id}', Lead\GetLog::class);
        $app->post('/upload/{id}', Lead\Upload::class);
        $app->get('/upload/{id}', Lead\GetUpload::class);
        $app->post('', Lead\Create::class);
        $app->get('/{id}', Lead\GetOne::class);
        $app->put('/{id}', Lead\Update::class);
        $app->put('/status/{id}', Lead\UpdateStatus::class);
        $app->delete('/{id}', Lead\Delete::class);
	})->add(new Auth());
	
	$app->group('/pagamento', function () use ($app): void {
        $app->get('', Pagamento\GetAll::class);
        $app->put('/{id}', Pagamento\Create::class);
        $app->get('/{id}', Pagamento\GetOne::class);
        //$app->put('/{id}', Pagamento\Update::class);
        $app->delete('/{id}', Pagamento\Delete::class);
	})->add(new Auth());

    
});

$app->map(['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], '/{routes:.+}', function($req, $res) {
    $handler = $this->notFoundHandler; // handle using the default Slim page not found handler
    return $handler($req, $res);
});
