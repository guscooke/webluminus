<?php

declare(strict_types=1);

namespace App\Controller\Afiliado;

use Slim\Http\Request;
use Slim\Http\Response;

final class Update extends Base
{
    public function __invoke(Request $request, Response $response, array $args): Response
    {
        $input = (array) $request->getParsedBody();
        //$userIdLogged = $this->getAndValidateAfiliadoId($input);
        //$this->checkAfiliadoPermissions((int) $args['id'], (int) $userIdLogged);
        $afiliado= $this->getUpdateAfiliadoService()->update($input, (int) $args['id']);

        return $this->jsonResponse($response, 'success', $afiliado, 200);
    }
}
