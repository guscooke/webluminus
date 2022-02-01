<?php

declare(strict_types=1);

namespace App\Service\Afiliado;

final class Find extends Base
{
    public function getAfiliadoByPage(
        int $page,
        int $perPage,
        ?string $nome,
        ?string $email,
        ?string $cnpj,
        ?string $endereco,
        ?string $cidade,
        ?string $estado,
        ?string $cep,
        ?string $ativo,        
        ?string $banco,
        ?string $agencia,
        ?string $conta,
        ?string $corrente_poupanca
    ): array {
        if ($page < 1) {
            $page = 1;
        }
        if ($perPage < 1) {
            $perPage = self::DEFAULT_PER_PAGE_PAGINATION;
        }

        return $this->afiliadoRepository->getAfiliadoByPage(
            $page,
            $perPage,            
			$nome,
			$email,
			$cnpj,
			$endereco,
			$cidade,
			$estado,
			$cep,
			$ativo,
			$banco,
			$agencia,
			$conta,
			$corrente_poupanca
        );
    }

    public function getAll(): array
    {
        return $this->afiliadoRepository->getAll();
    }

    public function getOne(int $afiliadoId): object
    {
        $afiliado= $this->getAfiliadoFromDb($afiliadoId)->getData();
        

        return $afiliado;
    }
}
