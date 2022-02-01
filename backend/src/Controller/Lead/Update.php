<?php

declare(strict_types=1);

namespace App\Controller\Lead;

use Slim\Http\Request;
use Slim\Http\Response;

final class Update extends Base
{
    public function __invoke(Request $request, Response $response, array $args): Response
    {
        $input = (array) $request->getParsedBody();
        //$userIdLogged = $this->getAndValidateLeadId($input);
        //$this->checkLeadPermissions((int) $args['id'], (int) $userIdLogged);
        $lead= $this->getUpdateLeadService()->update($input, (int) $args['id']);

        return $this->jsonResponse($response, 'success', $lead, 200);
    }
}
