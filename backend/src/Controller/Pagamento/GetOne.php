<?php

declare(strict_types=1);

namespace App\Controller\Pagamento;

use Slim\Http\Request;
use Slim\Http\Response;

final class GetOne extends Base
{
    public function __invoke(Request $request, Response $response, array $args): Response
    {
        $pagamento = $this->getFindPagamentoService()->getOne((int) $args['id']);

        return $this->jsonResponse($response, 'success', $pagamento, 200);
    }
}
