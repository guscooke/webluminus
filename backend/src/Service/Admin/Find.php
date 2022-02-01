<?php

declare(strict_types=1);

namespace App\Service\Admin;

final class Find extends Base
{
    public function getAdminsByPage(
        int $page,
        int $perPage,
        ?string $nome,
        ?string $email,
        ?string $ativo,
        ?int $afiliado_id
    ): array {
        if ($page < 1) {
            $page = 1;
        }
        if ($perPage < 1) {
            $perPage = self::DEFAULT_PER_PAGE_PAGINATION;
        }

        return $this->adminRepository->getAdminsByPage(
            $page,
            $perPage,
            $nome,
            $email,
            $ativo,
			$afiliado_id
        );
    }

    public function getAll(): array
    {
        return $this->adminRepository->getAll();
    }
	
	public function getLeadsAfiliado($afiliado, $data_ini, $data_fim): array
    {
        return $this->adminRepository->getLeadsAfiliado($afiliado, $data_ini, $data_fim);
    }
	
	public function getLeadsStatus($afiliado, $data_ini, $data_fim): array
    {
        return $this->adminRepository->getLeadsStatus($afiliado, $data_ini, $data_fim);
    }
	
	public function getPagamentosStatus($afiliado, $data_ini, $data_fim): array
    {
        return $this->adminRepository->getPagamentosStatus($afiliado, $data_ini, $data_fim);
    }

    public function getOne(int $adminId): object
    {
        $admin = $this->getAdminFromDb($adminId)->getData();
        

        return $admin;
    }
}
