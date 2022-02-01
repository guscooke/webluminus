<?php

declare(strict_types=1);

namespace App\Controller\Lead;

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
        $cpf = $request->getQueryParam('cpf', null);
        $endereco = $request->getQueryParam('endereco', null);
        $cidade = $request->getQueryParam('cidade', null);
        $estado = $request->getQueryParam('estado', null);
        $cep = $request->getQueryParam('cep', null);
        $contato = $request->getQueryParam('contato', null);
        $email = $request->getQueryParam('email', null);
        $telefone_fixo = $request->getQueryParam('telefone_fixo', null);
        $telefone_celular = $request->getQueryParam('telefone_celular', null);
        $whatsapp = $request->getQueryParam('whatsapp', null);
        $status= $request->getQueryParam('status', null);
        $qtde_beneficiarios= $request->getQueryParam('qtde_beneficiarios', null);
        $plano_atual= $request->getQueryParam('plano_atual', null);
        $detalhes= $request->getQueryParam('detalhes', null);
		$afiliado_id = $decoded_array['afiliado_id'];

        $afiliados = $this->getFindLeadService()
            ->getLeadByPage((int) $page, (int) $perPage, $nome, $cpf, $endereco, $cidade, $estado, $cep, $contato, $email, $telefone_fixo, $telefone_celular, $whatsapp, $status, $qtde_beneficiarios, $plano_atual, $detalhes, $afiliado_id);

		$afiliados['properties'] = array(
									'fields' => array(
										'id' => array('field' => 'id', 'type' => 'Integer', 'description' => "Id", 'readonly' => 'readonly'),
										'nome' => array('field' => 'nome', 'type' => 'String', 'description' => "Razão Social", 'readonly' => 'false'),
										'cpf' => array('field' => 'cpf', 'type' => 'String', 'description' => "CNPJ", 'readonly' => 'false'),
										'endereco' => array('field' => 'endereco', 'type' => 'String', 'description' => "Endereço", 'readonly' => 'false'),
										'cidade' => array('field' => 'cidade', 'type' => 'String', 'description' => "Cidade", 'readonly' => 'false'),
										'estado' => array('field' => 'estado', 'type' => 'String', 'description' => "Estado", 'readonly' => 'false'),
										'cep' => array('field' => 'cep', 'type' => 'String', 'description' => "CEP", 'readonly' => 'false'),										
										'contato' => array('field' => 'contato', 'type' => 'String', 'description' => "Contato", 'readonly' => 'false'),
										'email' => array('field' => 'email', 'type' => 'String', 'description' => "E-mail", 'readonly' => 'false'),
										'telefone_fixo' => array('field' => 'telefone_fixo', 'type' => 'String', 'description' => "Telefone Fixo", 'readonly' => 'false'),
										'telefone_celular' => array('field' => 'telefone_celular', 'type' => 'String', 'description' => "Telefone Celular", 'readonly' => 'false'),
										'whatsapp' => array('field' => 'whatsapp', 'type' => 'String', 'description' => "Whatsapp", 'readonly' => 'false'),
										'status' => array('field' => 'status', 'type' => 'String', 'description' => "Status", 'readonly' => 'readonly'),
										'qtde_beneficiarios' => array('field' => 'qtde_beneficiarios', 'type' => 'Integer', 'description' => "Qtd Beneficiários", 'readonly' => 'false'),
										'plano_atual' => array('field' => 'plano_atual', 'type' => 'String', 'description' => "Plano Atual", 'readonly' => 'false'),
										'detalhes' => array('field' => 'detalhes', 'type' => 'String', 'description' => "Detalhes", 'readonly' => 'false'),
										'afiliado_id' => array('field' => 'afiliado_id', 'type' => 'String', 'description' => "Afiliado", 'readonly' => 'false'),
									),
									'required' => array( 'nome', 'cpf', 'email', 'telefone_celular', 'whatsapp', 'contato', 'qtde_beneficiarios', 'plano_atual', 'status'),
									'show' => array( 'nome', 'cpf', 'email', 'telefone_celular', 'whatsapp', 'status', 'contato', 'qtde_beneficiarios', 'plano_atual', 'status')
								);
								
		if( isset($afiliado_id) && !empty($afiliado_id) && $afiliado_id != 0){
			unset($afiliados['properties']['fields']['afiliado_id']);
		}

        return $this->jsonResponse($response, 'success', $afiliados, 200);
    }
}
