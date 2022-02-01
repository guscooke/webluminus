<?php

declare(strict_types=1);

namespace App\Controller\Admin;

use Slim\Http\Request;
use Slim\Http\Response;

final class GetPagamentosStatus extends Base
{
    public function __invoke(Request $request, Response $response): Response
    {
        $afiliado = $request->getQueryParam('afiliado', null);
        $data_ini = $request->getQueryParam('data_ini', null);
        $data_fim = $request->getQueryParam('data_fim', null);
		$user = $this->getFindAdminService()->getPagamentosStatus($afiliado, $data_ini, $data_fim);

        return $this->jsonResponse($response, 'success', $user, 200);
    }
}
