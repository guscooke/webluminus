<?php

declare(strict_types=1);

namespace App\Entity;

final class Afiliado
{
    
    private $id;
    private $nome;
    private $cnpj;
    private $endereco;
    private $cidade;
    private $estado;
    private $cep;
    private $ativo;
    private $criado_em;
    private $criado_por;
    private $atualizado_em;
    private $atualizado_por;
    private $banco;
    private $agencia;
    private $conta;
    private $corrente_poupanca;
    private $email;
    private $password;
    private $comissao;

    public function getId(): int
    {
        return $this->id;
    }

    public function getNome(): ?string
    {
        return $this->nome;
    }

    public function updateNome(string $nome): self
    {
        $this->nome = $nome;

        return $this;
    }

    public function getCnpj(): ?string
    {
        return $this->cnpj;
    }

    public function updateCnpj(string $cnpj): self
    {
        $this->cnpj = $cnpj;

        return $this;
    }

    public function getEndereco(): ?string
    {
        return $this->endereco;
    }

    public function updateEndereco(string $endereco = null): self
    {
        $this->endereco = $endereco;

        return $this;
    }
	
	public function getCidade(): ?string
    {
        return $this->cidade;
    }

    public function updateCidade(string $cidade = null): self
    {
        $this->cidade = $cidade;

        return $this;
    }
	
	public function getEstado(): ?string
    {
        return $this->estado;
    }

    public function updateEstado(string $estado = null): self
    {
        $this->estado = $estado;

        return $this;
    }
	
	public function getCep(): ?string
    {
        return $this->cep;
    }

    public function updateCep(string $cep = null): self
    {
        $this->cep = $cep;

        return $this;
    }
	
	public function getAtivo(): ?string
    {
        return $this->ativo;
    }

    public function updateAtivo(string $ativo = null): self
    {
        $this->ativo = $ativo;

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
	
	public function getAtualizadoEm()
    {
        return $this->atualizado_em;
    }
	
	public function getAtualizadoPor()
    {
        return $this->atualizado_por;
    }

    public function getBanco(): ?string
    {
        return $this->banco;
    }

    public function updateBanco(string $banco = null): self
    {
        $this->banco= $banco;

        return $this;
    }
	
	public function getAgencia(): ?string
    {
        return $this->agencia;
    }

    public function updateAgencia(string $agencia = null): self
    {
        $this->agencia = $agencia;

        return $this;
    }
	
	public function getConta(): ?string
    {
        return $this->conta;
    }

    public function updateConta(string $conta = null): self
    {
        $this->conta = $conta;

        return $this;
    }
	
	public function getCorrentePoupanca(): ?string
    {
        return $this->corrente_poupanca;
    }

    public function updateCorrentePoupanca(string $corrente_poupanca = null): self
    {
        $this->corrente_poupanca = $corrente_poupanca;

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
	
	public function getPassword()
    {
        return $this->password;
    }

    public function updatePassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }
	
	public function getComissao()
    {
        return $this->comissao;
    }

    public function updateComissao($comissao): self
    {
        $this->comissao = $comissao;

        return $this;
    }

    public function getData(): object
    {
        $afiliado = new \stdClass();
        $afiliado->id = $this->getId();
        $afiliado->nome = $this->getNome();
        $afiliado->cnpj= $this->getCnpj();
        $afiliado->endereco= $this->getEndereco();
        $afiliado->cidade= $this->getCidade();
        $afiliado->estado= $this->getEstado();
        $afiliado->cep= $this->getCep();
        $afiliado->ativo = $this->getAtivo();
        $afiliado->criado_em= $this->getCriadoEm();
        $afiliado->criado_por= $this->getCriadoPor();
        $afiliado->atualizado_em = $this->getAtualizadoEm();
        $afiliado->atualizado_por = $this->getAtualizadoPor();
        $afiliado->banco = $this->getBanco();
        $afiliado->agencia = $this->getAgencia();
        $afiliado->conta= $this->getConta();
        $afiliado->corrente_poupanca = $this->getCorrentePoupanca();
        $afiliado->email = $this->getEmail();
        $afiliado->password = $this->getPassword();
        $afiliado->comissao = $this->getComissao();

        return $afiliado;
    }
}
