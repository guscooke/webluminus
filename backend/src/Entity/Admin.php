<?php

declare(strict_types=1);

namespace App\Entity;

final class Admin
{
    /** @var int */
    private $id;

    /** @var string */
    private $nome;

    /** @var string */
    private $email;

    /** @var string */
    private $password;
	
	/** @var string */
    private $ativo;
	
	/** @var int */
    private $afiliado_id;

    public function getId(): int
    {
        return $this->id;
    }

    public function getName(): string
    {
        return $this->nome;
    }

    public function updateName(string $nome): self
    {
        $this->nome = $nome;

        return $this;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function updateEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPassword(): string
    {
        return $this->password;
    }

    public function updatePassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }
	
	public function getAtivo(): string
    {
        return $this->ativo;
    }

    public function updateAtivo(string $ativo): self
    {
        $this->ativo = $ativo;

        return $this;
    }
	
	public function getAfiliadoId()
    {
        return $this->afiliado_id;
    }

    public function updateAfiliadoId(int $afiliado_id): self
    {
        $this->afiliado_id = $afiliado_id;

        return $this;
    }

    public function getData(): object
    {
        $admin = new \stdClass();
        $admin->id = $this->getId();
        $admin->nome = $this->getName();
        $admin->email = $this->getEmail();        
        $admin->afiliado_id = $this->getAfiliadoId();

        return $admin;
    }
}
