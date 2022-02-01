<?php

declare(strict_types=1);

namespace App\Controller\Lead;

use Slim\Http\Request;
use Slim\Http\Response;
use Firebase\JWT\JWT;

final class Create extends Base
{
    public function __invoke(Request $request, Response $response): Response
    {
		$jwtHeader = $request->getHeaderLine('Authorization');
		$jwt = explode('Bearer ', $jwtHeader);
		$decoded = JWT::decode($jwt[1], $_SERVER['SECRET_KEY'], ['HS256']);
		$decoded_array = (array) $decoded;
		
        $input = (array) $request->getParsedBody();
        $lead = $this->getCreateLeadService()->create($input, $decoded_array['afiliado']);

        return $this->jsonResponse($response, 'success', $lead, 201);
    }
}
