<?php

declare(strict_types=1);

namespace App\Service\Lead;

final class Find extends Base
{
    public function getLeadByPage(
        int $page,
        int $perPage,
        ?string $nome,
        ?string $cpf,
        ?string $endereco,
        ?string $cidade,
        ?string $estado,
        ?string $cep,
        ?string $contato,
        ?string $email,
        ?string $telefone_fixo,
        ?string $telefone_celular,
        ?string $whatsapp,
        ?string $status,                
        ?string $qtde_beneficiarios,                
        ?string $plano_atual,                
        ?string $detalhes,    
        ?int $afiliado_id
    ): array {
        if ($page < 1) {
            $page = 1;
        }
        if ($perPage < 1) {
            $perPage = self::DEFAULT_PER_PAGE_PAGINATION;
        }

        return $this->leadRepository->getLeadByPage(
            $page,
            $perPage,            
			$nome,
			$cpf,
			$endereco,
			$cidade,
			$estado,
			$cep,
			$contato,
			$email,
			$telefone_fixo,
			$telefone_celular,
			$whatsapp,
			$status,			
			$qtde_beneficiarios,			
			$plano_atual,			
			$detalhes,
			$afiliado_id
        );
    }

    public function getAll(): array
    {
        return $this->leadRepository->getAll();
    }
	
	public function getLog(int $leadId): array
    {
        return $this->leadRepository->getLog($leadId);
    }

    public function getOne(int $leadId): object
    {
        $lead= $this->getLeadFromDb($leadId)->getData();
        

        return $lead;
    }
}
