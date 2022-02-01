<?php

declare(strict_types=1);

namespace App\Entity;

final class Pagamento
{
    
    private $pagamento_id;
    private $data_pagamento;
    private $comissao_afiliado;
    private $valor_pagamento;
    private $comentarios;    
    private $criado_em;
    private $criado_por;        

    public function getLeadId(): ?int
    {
        return $this->pagamento_id;
    }
	
	public function updateLeadId(int $pagamento_id): self
    {
		$this->pagamento_id = $pagamento_id;

        return $this;
    }

    public function getDataPagamento(): ?string
    {
        return $this->data_pagamento;
    }

    public function updateDataPagamento(string $data_pagamento): self
    {
        $this->data_pagamento = $data_pagamento;

        return $this;
    }

    public function getComissaoAfiliado(): ?float
    {
        return $this->comissao_afiliado;
    }

    public function updateComissaoAfiliado(float $comissao_afiliado): self
    {
        $this->comissao_afiliado = $comissao_afiliado;

        return $this;
    }

    public function getValorPagamento(): ?float
    {
        return $this->valor_pagamento;
    }

    public function updateValorPagamento(float $valor_pagamento = null): self
    {
        $this->valor_pagamento = $valor_pagamento;

        return $this;
    }
	
	public function getComentarios(): ?string
    {
        return $this->comentarios;
    }

    public function updateComentarios(string $comentarios = null): self
    {
        $this->comentarios = $comentarios;

        return $this;
    }
	
	public function getCriadoEm()
    {
        return $this->criado_em;
    }
	
	public function getCriadoPor()
    {
        return $this->criado_por;
    }

    public function getData(): object
    {
        $pagamento = new \stdClass();
        $pagamento->pagamento_id = $this->getLeadId();
        $pagamento->data_pagamento = $this->getDataPagamento();
        $pagamento->comissao_afiliado= $this->getComissaoAfiliado();
        $pagamento->valor_pagamento= $this->getValorPagamento();
        $pagamento->comentarios= $this->getComentarios();        
        $pagamento->criado_em= $this->getCriadoEm();
        $pagamento->criado_por= $this->getCriadoPor();        
		
        return $pagamento;
    }
}
