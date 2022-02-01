import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';  
window.fn = OwlCarousel;
import { Link } from 'react-router-dom';

class Testimonial2 extends Component {
    render() {
        return (
         
          <section className="testimonial-section"> 
            <div className="large-container">
              <div className="sec-title"><h2>Depoimentos</h2>
                <h4>O que os nossos clientes andam falando sobre nós ?</h4>
                
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
                      <div className="text"><h4>"A Luminus Seguros foi a empresa que facilitou as minhas demandas no RH relacionadas ao benefício de saúde dos meus colaboradores..." </h4>
                      </div>
                      <Link className="info-box" to="/depoimentos"><h6>leia mais</h6></Link>
                     
                      <div className="info-box">
                        <div className="thumb"><img src="http://t.commonsupport.com/adro/images/resource/thumb-4.jpg" alt="" />
                        </div>
                        <h4 className="name">Beatriz</h4>
                        <span className="designation">ONA &amp; Organização Nacional de Acreditação</span>
                        
                      </div>
                    </div>
                  </div>
                 
                 
                  <div className="testimonial-block">
                    <div className="inner-box">
                      <div className="text"><h4>"A Luminus Seguros é uma empresa sólida e de extrema atenção comigo! O Atendimento é sempre maravilhoso e imediato..."</h4></div>
                        <Link className="info-box" to="/depoimentos"><h6>leia mais</h6></Link>
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

export default Testimonial2;