import React from "react";
import { Link } from 'react-router-dom';

function Card () {
    return(
  <div className="row align-items-center justify-content-between mb-10">
        <div className="col-12 col-lg-6 mb-lg-0">
          <div className="card-container1">
            <div className="card1">
              <div className="front">
              <div className="beacon"></div>
                <h2 className="sub-title1">Empresas</h2>
                <h1 className="title1">
                Seguros e planos empresariais
                </h1>
                <img src={require(`../../assets/images/hero/Prancheta 4.png`)} alt="Image" className="img-fluid" />
              </div>
              <div className="back">
                        <h5>Planos empresariais</h5>
                        <h6>A partir de 1 beneficiário já é possível ter acesso a seguros, planos médicos e odontológicos com custos até <strong>30% menores</strong> comparados planos contratados através de CPF.</h6> 
                        <h5>Micro e pequenas empresas:</h5>
                        <h6>Levamos as melhores opções para você, sua família ou seus funcionários que poderão lhe surpreender! 
                        Além de facilitarmos seu dia a dia em todas as suas rotinas relacionadas ao seguro ou plano de saúde.</h6> 
                        <h5>Médias e grandes empresas:</h5>
                        <h6>Contamos com profissionais altamente qualificados para consultoria e gestão de benefícios desde a aquisição ao atendimento assistencial.</h6>
                        
                        <Link className="btn1" to="/contato">Saiba mais</Link>
              </div>
            </div>
          </div>
          </div>
        
        
          <div className="card-container1">
            <div className="card1">
              <div className="front">
              <div className="beacon"></div>

                <h2 className="sub-title1">Pessoa Física</h2>
                <h1 className="title1">
                Planos individuais, familiares e coletivos por adesão.
                </h1>
                <img src={require(`../../assets/images/hero/Prancheta 5.png`)} alt="Image" className="img-fluid" />
              </div>
              <div className="back">
                <h5>Planos individuais, familiares e coletivos por adesão.</h5>
                <h6>São as modalidades de seguros e planos de saúde para quem não dispões de um CNPJ para contratação.</h6>
                <h6>Buscamos as melhores condições de custo x benefício dentro das melhores companhias do mercado.</h6>
                
              
                <Link className="btn1" to="/contato">Saiba mais</Link>
              </div>
            </div>
          </div>
        
        
    </div>
    
    
  
    
       
    )
}

export default Card;