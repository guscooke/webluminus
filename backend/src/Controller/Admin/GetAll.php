<?php

declare(strict_types=1);

namespace App\Controller\Admin;

use Slim\Http\Request;
use Slim\Http\Response;
use Firebase\JWT\JWT;

final class GetAll extends Base
{
    public function __invoke(Request $request, Response $response): Response
    {
		$jwtHeader = $request->getHeaderLine('Authorization');
		$jwt = explode('Bearer ', $jwtHeader);
		$decoded = JWT::decode($jwt[1], $_SERVER['SECRET_KEY'], ['HS256']);
		$decoded_array = (array) $decoded;

        $page = $request->getQueryParam('page', null);
        $perPage = $request->getQueryParam('perPage', null);
        $nome = $request->getQueryParam('nome', null);
        $email = $request->getQueryParam('email', null);
        $ativo= $request->getQueryParam('ativo', null);
        $afiliado_id= $decoded_array['afiliado_id'];

        $users = $this->getFindAdminService()
            ->getAdminsByPage((int) $page, (int) $perPage, $nome, $email, $ativo, $afiliado_id);

		$users['properties'] = array(
									'fields' => array(
										'id' => array('field' => 'id', 'type' => 'Integer', 'description' => "Id", 'readonly' => 'readonly'),
										'nome' => array('field' => 'nome', 'type' => 'String', 'description' => "Nome", 'readonly' => 'false'),
										'email' => array('field' => 'email', 'type' => 'String', 'description' => "E-mail", 'readonly' => 'false'),
										'ativo' => array('field' => 'ativo', 'type' => 'String', 'description' => "Ativo", 'readonly' => 'false'),
										'password' => array('field' => 'password', 'type' => 'String', 'description' => "Senha", 'readonly' => 'false'),
										'afiliado_id' => array('field' => 'afiliado_id', 'type' => 'String', 'description' => "Afiliado", 'readonly' => 'false'),
									),
									'required' => array( 'nome', 'email', 'ativo', 'password')
								);
		if( isset($afiliado_id) && !empty($afiliado_id) && $afiliado_id != 0){
			unset($users['properties']['fields']['afiliado_id']);
		}

        return $this->jsonResponse($response, 'success', $users, 200);
    }
}
