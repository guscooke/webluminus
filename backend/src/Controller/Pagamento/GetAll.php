<?php

declare(strict_types=1);

namespace App\Controller\Pagamento;

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
		
        $data_pagamento = $request->getQueryParam('data_pagamento', null);
        $comissao_afiliado = $request->getQueryParam('comissao_afiliado', null);
        $valor_pagamento = $request->getQueryParam('valor_pagamento', null);
        $comentarios = $request->getQueryParam('comentarios', null);    
		$afiliado_id = $decoded_array['afiliado_id'];		

        $pagamento = $this->getFindPagamentoService()
            ->getPagamentoByPage((int) $page, (int) $perPage, $data_pagamento, $comissao_afiliado, $valor_pagamento, $comentarios, $afiliado_id);
		
		$pagamento['properties'] = array(
									'fields' => array(
										'id' => array('field' => 'id', 'type' => 'Integer', 'description' => "Lead ID", 'readonly' => 'readonly'),
										'nome' => array('field' => 'nome', 'type' => 'String', 'description' => "Nome/Razão Social", 'readonly' => 'false'),										
										'cpf' => array('field' => 'cpf', 'type' => 'String', 'description' => "CNPJ/CPF", 'readonly' => 'false'),
										'contato' => array('field' => 'contato', 'type' => 'String', 'description' => "Contato", 'readonly' => 'false'),										
									),									
									'required' => array( 'nome', 'cpf', 'contato')
								);

        return $this->jsonResponse($response, 'success', $pagamento, 200);
    }
}
