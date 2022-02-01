<?php

declare(strict_types=1);

namespace App\Entity;

final class LeadStatus
{
    
    private $id;    
    private $status;
    private $log_em;
    private $log_por;        
    private $comentarios;

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
	
	public function getLogEm()
    {
        return $this->log_em;
    }
	
	public function getLogPor()
    {
        return $this->log_por;
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

    public function getData(): object
    {
        $lead = new \stdClass();
        $lead->id = $this->getId();        
        $lead->status = $this->getStatus();
        $lead->log_em= $this->getLogEm();
        $lead->log_por= $this->getLogPor();                
        $lead->comentarios= $this->getComentarios();

        return $lead;
    }
}
