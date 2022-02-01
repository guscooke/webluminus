<?php

declare(strict_types=1);

namespace App\Controller\Afiliado;

use Slim\Http\Request;
use Slim\Http\Response;

final class Delete extends Base
{
    public function __invoke(Request $request, Response $response, array $args): Response
    {
        $input = (array) $request->getParsedBody();
        //$userIdLogged = $this->getAndValidateUserId($input);
        //$this->checkAfiliadoPermissions((int) $args['id'], (int) $userIdLogged);
        $this->getDeleteAfiliadoService()->delete((int) $args['id']);

        return $this->jsonResponse($response, 'success', null, 204);
    }
}
