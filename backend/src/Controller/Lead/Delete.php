<?php

declare(strict_types=1);

namespace App\Controller\Lead;

use Slim\Http\Request;
use Slim\Http\Response;

final class Delete extends Base
{
    public function __invoke(Request $request, Response $response, array $args): Response
    {
        $input = (array) $request->getParsedBody();
        //$userIdLogged = $this->getAndValidateUserId($input);
        //$this->checkLeadPermissions((int) $args['id'], (int) $userIdLogged);
        $this->getDeleteLeadService()->delete((int) $args['id']);

        return $this->jsonResponse($response, 'success', null, 204);
    }
}
