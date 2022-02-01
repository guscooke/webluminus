<?php

declare(strict_types=1);

namespace App\Entity;

final class LeadStatus
{
    
    private $id;    
    private $status;
    private $criado_em;
    private $criado_por;        
    private $comentarios;
    private $motivo;
    private $lembrete_retorno;
    private $file_uploaded;
    private $valor_cotacao;

    public function getId(): int
    {
        return $this->id;
    }
	
	public function updateId(int $id): self
    {
        $this->id = $id;

        return $this;
    }
	
	public function getStatus(): ?string
    {
        return $this->status;
    }

    public function updateStatus(string $status = null): self
    {
        $this->status = $status;

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
	
	public function getComentarios(): ?string
    {
        return $this->comentarios;
    }

    public function updateComentarios(string $comentarios = null): self
    {
        $this->comentarios = $comentarios;

        return $this;
    }
	
	public function getMotivo(): ?string
    {
        return $this->motivo;
    }

    public function updateMotivo(string $motivo = null): self
    {
        $this->motivo = $motivo;

        return $this;
    }
	
	public function getLembreteRetorno()
    {
        return $this->lembrete_retorno;
    }

    public function updateLembreteRetorno($lembrete_retorno = null): self
    {
        $this->lembrete_retorno = $lembrete_retorno;

        return $this;
    }
	
	public function getFileUploaded()
    {
        return $this->file_uploaded;
    }

    public function updateFileUploaded($file_uploaded = null): self
    {
        $this->file_uploaded = $file_uploaded;

        return $this;
    }
	
	public function getValorCotacao(): ?float
    {
        return $this->valor_cotacao;
    }

    public function updateValorCotacao(float $valor_cotacao = null): self
    {
        $this->valor_cotacao = $valor_cotacao;

        return $this;
    }

    public function getData(): object
    {
        $lead = new \stdClass();
        $lead->id = $this->getId();        
        $lead->status = $this->getStatus();
        $lead->criado_em= $this->getCriadoEm();
        $lead->criado_por= $this->getCriadoPor();                
        $lead->comentarios= $this->getComentarios();
        $lead->motivo= $this->getMotivo();
        $lead->lembrete_retorno= $this->getLembreteRetorno();
        $lead->file_uploaded= $this->getFileUploaded();
        $lead->valor_cotacao= $this->getValorCotacao();

        return $lead;
    }
}
