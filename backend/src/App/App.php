<?php

declare(strict_types=1);

require __DIR__ . '/../../vendor/autoload.php';
$baseDir = __DIR__ . '/../../';
$dotenv = Dotenv\Dotenv::createImmutable($baseDir);
$envFile = $baseDir . '.env';
if (file_exists($envFile)) {
    $dotenv->load();
}
$dotenv->required(['DB_HOSTNAME', 'DB_DATABASE', 'DB_USERNAME', 'DB_PASSWORD']);
$settings = require __DIR__ . '/Settings.php';
$app = new \Slim\App($settings);
/*$corsOptions = array(
    "origin" => "*",
    "exposeHeaders" => array("Content-Type", "X-Requested-With", "X-authentication", "X-client"),
    "allowMethods" => array('GET', 'POST', 'PUT', 'DELETE', 'OPTIONS')
);
$app->add(new \CorsSlim\CorsSlim($corsOptions));*/

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-Requested-With, X-authentication,Content-Type, X-client, Content-Type, Authorization');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PUT');


$container = $app->getContainer();
require __DIR__ . '/Dependencies.php';
require __DIR__ . '/Services.php';
require __DIR__ . '/Repositories.php';
require __DIR__ . '/Routes.php';
