<?php

declare(strict_types=1);

namespace App\Entity;

final class Lead
{
    
    private $id;
    private $nome;
    private $cpf;
    private $endereco;
    private $cidade;
    private $estado;
    private $cep;
    private $contato;
    private $email;
    private $telefone_fixo;
    private $telefone_celular;
    private $whatsapp;
    private $status;
    private $qtde_beneficiarios;
    private $plano_atual;
    private $criado_em;
    private $criado_por;    
    private $afiliado_id;
    private $detalhes;
    private $valor_cotacao;

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

    public function getCpf(): ?string
    {
        return $this->cpf;
    }

    public function updateCpf(string $cpf): self
    {
        $this->cpf = $cpf;

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
	
	public function getContato(): ?string
    {
        return $this->contato;
    }

    public function updateContato(string $contato = null): self
    {
        $this->contato = $contato;

        return $this;
    }
	
	public function getEmail(): ?string
    {
        return $this->email;
    }

    public function updateEmail(string $email = null): self
    {
        $this->email = $email;

        return $this;
    }
	
	public function getTelefoneFixo(): ?string
    {
        return $this->telefone_fixo;
    }

    public function updateTelefoneFixo(string $telefone_fixo = null): self
    {
        $this->telefone_fixo = $telefone_fixo;

        return $this;
    }
	
	public function getTelefoneCelular(): ?string
    {
        return $this->telefone_celular;
    }

    public function updateTelefoneCelular(string $telefone_celular = null): self
    {
        $this->telefone_celular = $telefone_celular;

        return $this;
    }
	
	public function getWhatsapp(): ?string
    {
        return $this->whatsapp;
    }

    public function updateWhatsapp(string $whatsapp = null): self
    {
        $this->whatsapp = $whatsapp;

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
	
	public function getQtdeBeneficiarios(): ?int
    {
        return $this->qtde_beneficiarios;
    }

    public function updateQtdeBeneficiarios(int $qtde_beneficiarios = null): self
    {
        $this->qtde_beneficiarios = $qtde_beneficiarios;

        return $this;
    }
	
	public function getPlanoAtual(): ?string
    {
        return $this->plano_atual;
    }

    public function updatePlanoAtual(string $plano_atual = null): self
    {
        $this->plano_atual = $plano_atual;

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

    public function getAfiliadoId(): ?int
    {
        return $this->afiliado_id;
    }

    public function updateAfiliadoId(int $afiliado_id = null): self
    {
        $this->afiliado_id= $afiliado_id;

        return $this;
    }
	
	public function getDetalhes(): ?string
    {
        return $this->detalhes;
    }

    public function updateDetalhes(string $detalhes = null): self
    {
        $this->detalhes = $detalhes;

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
        $lead->nome = $this->getNome();
        $lead->cpf= $this->getCpf();
        $lead->endereco= $this->getEndereco();
        $lead->cidade= $this->getCidade();
        $lead->estado= $this->getEstado();
        $lead->cep= $this->getCep();
        $lead->contato= $this->getContato();
        $lead->email= $this->getEmail();
        $lead->telefone_celular= $this->getTelefoneCelular();
        $lead->telefone_fixo= $this->getTelefoneFixo();
        $lead->whatsapp= $this->getWhatsapp();
        $lead->status = $this->getStatus();
        $lead->qtde_beneficiarios = $this->getQtdeBeneficiarios();
        $lead->plano_atual = $this->getPlanoAtual();
        $lead->criado_em= $this->getCriadoEm();
        $lead->criado_por= $this->getCriadoPor();        
        $lead->afiliado_id = $this->getAfiliadoId();
        $lead->detalhes= $this->getDetalhes();
        $lead->valor_cotacao= $this->getValorCotacao();

        return $lead;
    }
}
