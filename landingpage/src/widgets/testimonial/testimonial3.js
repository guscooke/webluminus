import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';  
window.fn = OwlCarousel;

class Test extends Component {
    render() {
        return (
         
          <section className="testimonial-section"> 
            <div className="large-container">
              <div className="sec-title">
              
                <h2>O que os nossos clientes andam falando sobre nós ?</h2>
              </div>
                {/* <div className="owl-carousel owl-center" data-center="true" data-items={31} data-md-items={1} data-sm-items={1}> */}
                <OwlCarousel
                   
                   
                    animateIn='flipInX'
                    animateOut= 'slideOutDown'
                    className="owl-carousel no-pb owl-2"
                    dotData={false}
                    nav={true}
                    items={1}
                    autoplay={false}
                    dots={false}
                    loop={true}
                  
                   
                >
                  
                 
                  <div className="testimonial-block">
                    <div className="inner-box">
                      <div className="text"><h6>A Luminus Seguros foi a empresa que facilitou as minhas demandas no RH relacionadas ao benefício de saúde dos meus colaboradores. Com um atendimento ágil, transparente e efetivo o suporte sempre atendeu todas as demandas da minha organização. Tornando o processo mais tranquilo e muito mais prático para quem cuida dos colaboradores. 
Indico de olhos fechados, trabalho com eles a quase 2 anos e tem sido uma experiência única. </h6></div>
                      <div className="info-box">
                        <div className="thumb"><img src="http://t.commonsupport.com/adro/images/resource/thumb-4.jpg" alt="" /></div>
                        <h4 className="name">Beatriz</h4>
                        <span className="designation">ONA &amp; Organização Nacional de Acreditação</span>
                      </div>
                    </div>
                  </div>
                 
                 
                  <div className="testimonial-block">
                    <div className="inner-box">
                      <div className="text"><h6>A Luminus Seguros é uma empresa sólida e de extrema atenção comigo! 
O Atendimento é sempre maravilhoso e imediato, tenho total confiança nos serviços prestados.
Desde o primeiro contato com a empresa já tivemos uma excelente recepção, as equipes estão sempre alinhadas e tratam minhas solicitações sempre de forma rápida e eficaz!
Obrigado Luminus por cuidar de mim, da minha família e meus colaboradores.</h6></div>
                      <div className="info-box">
                        <div className="thumb"><img src="http://t.commonsupport.com/adro/images/resource/thumb-1.jpg" alt="" /></div>
                        <h4 className="name">Rafael Paes</h4>
                        <span className="designation">Paes e Toth Consultores Associados &amp; CEO</span>
                      </div>
                    </div>
                  </div>
               
            
                  
                </OwlCarousel>
                </div>
                </section>
           
            
            
        
          
        );
    }
}

export default Test;