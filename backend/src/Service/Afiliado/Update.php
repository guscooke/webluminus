<?php

declare(strict_types=1);

namespace App\Service\Afiliado;

use App\Exception\Afiliado;

final class Update extends Base
{
    public function update(array $input, int $afiliadoId): object
    {
        $afiliado = $this->validateAfiliadoData($input, $afiliadoId);
        
        $afiliados = $this->afiliadoRepository->update($afiliado);

        return $afiliados->getData();
    }

    public function validateAfiliadoData(array $input, int $afiliadoId): object
    {
        $afiliado = $this->getAfiliadoFromDb($afiliadoId);
        $data = json_decode((string) json_encode($input), false);
        if (! isset($data->nome) && ! isset($data->cnpj) && ! isset($data->banco) ) {
            throw new Afiliado('Informe os dados para atualizar.', 400);
        }
        /*if (isset($data->nome)) {
            $admin->updateName(self::validateAdminName($data->nome));
        }
        if (isset($data->email)) {
            $admin->updateEmail(self::validateEmail($data->email));
        }*/
		
		$afiliado->updateNome($data->nome);
		$afiliado->updateCnpj($data->cnpj);
		$afiliado->updateEndereco($data->endereco);
		$afiliado->updateCidade($data->cidade);
		$afiliado->updateEstado($data->estado);
		$afiliado->updateCep($data->cep);
		$afiliado->updateAtivo($data->ativo);
		//$afiliado->updateAtualizadoPor($data->atualizado_por);
		$afiliado->updateBanco($data->banco);
		$afiliado->updateAgencia($data->agencia);
		$afiliado->updateConta($data->conta);
		$afiliado->updateCorrentePoupanca($data->corrente_poupanca);
		$afiliado->updateEmail($data->email);
		$afiliado->updatePassword(hash('sha512', $data->password));
		$afiliado->updateComissao($data->comissao);

        return $afiliado;
    }
}
