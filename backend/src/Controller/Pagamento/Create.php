<?php

declare(strict_types=1);

namespace App\Controller\Pagamento;

use Slim\Http\Request;
use Slim\Http\Response;

final class Create extends Base
{
    public function __invoke(Request $request, Response $response, array $args): Response
    {
		$input = (array) $request->getParsedBody();	
        $pagamento = $this->getCreatePagamentoService()->create($input, (int)$args['id']);

        return $this->jsonResponse($response, 'success', $pagamento, 201);
    }
}
