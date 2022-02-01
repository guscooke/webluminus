<?php

declare(strict_types=1);

namespace App\Controller\Pagamento;

use Slim\Http\Request;
use Slim\Http\Response;

final class Update extends Base
{
    public function __invoke(Request $request, Response $response, array $args): Response
    {
        $input = (array) $request->getParsedBody();
        //$userIdLogged = $this->getAndValidatePagamentoId($input);
        //$this->checkPagamentoPermissions((int) $args['id'], (int) $userIdLogged);
        $pagamento= $this->getUpdatePagamentoService()->update($input, (int) $args['id']);

        return $this->jsonResponse($response, 'success', $pagamento, 200);
    }
}
