<?php

declare(strict_types=1);

namespace App\Service\Afiliado;

use App\Exception\Afiliado;

final class Create extends Base
{
    public function create(array $input): object
    {
        $data = $this->validateAfiliadoData($input);
        /** @var \App\Entity\Admin $admin */
        $afiliado= $this->afiliadoRepository->create($data);
        

        return $afiliado->getData();
    }

    private function validateAfiliadoData(array $input): \App\Entity\Afiliado
    {
        $afiliado = json_decode((string) json_encode($input), false);
        if (! isset($afiliado->nome)) {
            throw new Afiliado('O campo nome é obrigatório.', 400);
        }
        if (! isset($afiliado->cnpj)) {
            throw new Afiliado('O campo CNPJ é obrigatório.', 400);
        }		
        if (! isset($afiliado->banco)) {
            throw new Afiliado('O campo banco é obrigatório.', 400);
        }
		
        $item = new \App\Entity\Afiliado();
        
		$item->updateNome($afiliado->nome);
		$item->updateCnpj($afiliado->cnpj);
		$item->updateEndereco($afiliado->endereco);
		$item->updateCidade($afiliado->cidade);
		$item->updateEstado($afiliado->estado);
		$item->updateCep($afiliado->cep);
		$item->updateAtivo($afiliado->ativo);
		//$item->updateCriadoPor($afiliado->criado_por);
		$item->updateBanco($afiliado->banco);
		$item->updateAgencia($afiliado->agencia);
		$item->updateConta($afiliado->conta);
		$item->updateCorrentePoupanca($afiliado->corrente_poupanca);
		$item->updateEmail($afiliado->email);		
		$item->updatePassword(hash('sha512', $afiliado->password));
		$item->updateComissao($afiliado->comissao);
		
        $this->afiliadoRepository->checkAfiliadoByCnpj($afiliado->cnpj);

        return $item;
    }
}
