<?php

declare(strict_types=1);

namespace App\Controller\Afiliado;

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
        $cnpj = $request->getQueryParam('cnpj', null);
        $endereco = $request->getQueryParam('endereco', null);
        $cidade = $request->getQueryParam('cidade', null);
        $estado = $request->getQueryParam('estado', null);
        $cep = $request->getQueryParam('cep', null);        
        $ativo= $request->getQueryParam('ativo', null);
        $banco= $request->getQueryParam('banco', null);
        $agencia= $request->getQueryParam('agencia', null);
        $conta= $request->getQueryParam('conta', null);
        $corrente_poupanca= $request->getQueryParam('corrente_poupanca', null);
        $email= $request->getQueryParam('email', null);

        $afiliados = $this->getFindAfiliadoService()
            ->getAfiliadoByPage((int) $page, (int) $perPage, $nome, $cnpj, $endereco, $cidade, $estado, $cep, $ativo, $banco, $agencia, $conta, $corrente_poupanca, $email );
		
		$afiliados['properties'] = array(
									'fields' => array(
										'id' => array('field' => 'id', 'type' => 'Integer', 'description' => "Id", 'readonly' => 'readonly'),
										'nome' => array('field' => 'nome', 'type' => 'String', 'description' => "Nome", 'readonly' => 'false'),
										'cnpj' => array('field' => 'cnpj', 'type' => 'String', 'description' => "CPF/CNPJ", 'readonly' => 'false'),
										'endereco' => array('field' => 'endereco', 'type' => 'String', 'description' => "Endereço", 'readonly' => 'false'),
										'cidade' => array('field' => 'cidade', 'type' => 'String', 'description' => "Cidade", 'readonly' => 'false'),
										'estado' => array('field' => 'estado', 'type' => 'String', 'description' => "Estado", 'readonly' => 'false'),
										'cep' => array('field' => 'cep', 'type' => 'String', 'description' => "CEP", 'readonly' => 'false'),
										'ativo' => array('field' => 'ativo', 'type' => 'String', 'description' => "Ativo", 'readonly' => 'false'),
										'banco' => array('field' => 'banco', 'type' => 'String', 'description' => "Banco", 'readonly' => 'false'),
										'agencia' => array('field' => 'agencia', 'type' => 'String', 'description' => "Agência", 'readonly' => 'false'),
										'conta' => array('field' => 'conta', 'type' => 'String', 'description' => "Conta", 'readonly' => 'false'),
										'corrente_poupanca' => array('field' => 'corrente_poupanca', 'type' => 'String', 'description' => "Corrente/Poupança", 'readonly' => 'false'),
										'comissao' => array('field' => 'comissao', 'type' => 'Integer', 'description' => "% Comissão", 'readonly' => 'false'),
										'email' => array('field' => 'email', 'type' => 'String', 'description' => "E-mail", 'readonly' => 'false'),
										'password' => array('field' => 'password', 'type' => 'String', 'description' => "Senha", 'readonly' => 'false'),
									),									
									'required' => array( 'nome', 'cnpj', 'banco', 'agencia', 'conta', 'corrente_poupanca', 'comissao', 'email', 'password')
								);

        return $this->jsonResponse($response, 'success', $afiliados, 200);
    }
}
