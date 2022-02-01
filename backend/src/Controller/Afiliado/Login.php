<?php

declare(strict_types=1);

namespace App\Controller\Afiliado;

use Slim\Http\Request;
use Slim\Http\Response;

final class Login extends Base
{
    public function __invoke(Request $request, Response $response): Response
    {
        $input = (array) $request->getParsedBody();
        $jwt = $this->getLoginAfiliadoService()->login($input);
        $message = [
            $jwt,
        ];

        return $this->jsonResponse($response, 'success', $message, 200);
    }
}
