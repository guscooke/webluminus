import React, { Component } from 'react';


class Memberaboutus extends Component {
    render() {
        return (
              <div className="row align-items-center justify-content-between">
                <div className="col-12 col-lg-12 mb-4">
                    {/* <div className="col-12 ml-auto mr-auto mt-n11 row align-items-center">  */}
                    <div className="row justify-content-center">
                      <img src={require(`../../assets/images/hero/aboutus.png`)} className="img-fluid center" alt="..." />
                    </div>
                  {/* </div> */}
                  
                </div>
                <div className="col-12">
                  <div> <span className="badge badge-primary-soft p-2">
                      {/* <i className="la la-exclamation ic-3x rotation" /> */}
                    </span>
                    <h2 className="justify-center">Nossa História</h2>
                    
                    <p className="text-justify">A <strong>Luminus Seguros</strong> foi criada para ser além de uma assessoria e corretora em seguros, mas sim ser uma ponte entre os anseios do consumidor e as opções de produtos disponíveis no mercado de forma simples, descomplicada e sempre utilizando a cultura de Customer Centric, isto é, o cliente no centro de tudo desde o primeiro contato em uma consultoria até o dia a dia de utilização do serviço contratado.</p>
                    <p className="text-justify"><strong>Rogério Costa</strong> é o fundador e idealizador do projeto e traz seus mais de 17 anos de experiência no mercado segurador, destes grande parte atuando em umas das maiores companhias de benefícios da América Latina em conjunto a sua visão de excelência em atender, levar soluções e utilizando da tecnologia para auxiliar a todos os envolvidos.</p>
                    <p className="text-justify"><strong>A Luminus</strong> é especialistas em consultoria, gestão e manutenção de seguros e benefícios para empresas de todos os portes, indivíduos e famílias, administrando de forma global a carteira de benefícios de seus clientes, dos mais variados segmentos, oferecendo consultoria e soluções customizadas, de acordo com o perfil, porte e necessidades de cada cliente.</p>
                    <p className="text-justify"><strong>A Luminus</strong> Seguros tem todas as suas áreas dedicas em entregar segurança e confiança através de uma excelente experiência desde o primeiro contato até o dia a dia de nossos clientes e parceiros. Contando com uma equipe de profissionais com elevada capacidade técnica e sólidos conhecimentos, prezando sempre pela qualidade ao atender às necessidades específicas de cada cliente e parceiro, ajudando a maximizar a sua proteção e otimizar seu investimento.</p>
                  </div>
               
                </div>
              </div>
          
        );
    }
}

export default Memberaboutus;