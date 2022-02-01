import React, { Component } from 'react';
import FeatureServices from '../../widgets/featurebox/services';
import Build from '../../widgets/slide/slide';
// import Counter4 from '../../widgets/counter/counter4';
import {Container,Row,Col} from 'reactstrap'
import Tilt from 'react-parallax-tilt';
import Videobox2 from '../../widgets/vediolightbox.js/videobox2';
export function Faq () {

    
        return ( 
        
            <div className="page-content ">
              {/*services start*/}
         
              {/*services end*/}
              {/*about start*/}
            
                 
              <section className="app1-header bg" >
                {/* <div className="app1-header "> */}
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-12 col-lg-6 mb-12 mb-lg-0">  
                            <Tilt perspective="5000" transitionSpeed="3000">  
                            <img src={require(`../../assets/images/about/04.png`)} alt="Image" className="img-fluid" />
                            </Tilt>
                            </div>
                        <div className="col-12 col-lg-6 col-xl-5 mb-0">
                      
                        <h2 className="mt-3 font-w-5 text-white"><strong className="text-orange">Indique </strong> a Luminus, <strong className="text-orange">ajude</strong> seus contatos a terem o <strong className="text-orange">melhor</strong> em planos de saúde e <strong className="text-orange">ganhe de forma ilimitada!</strong></h2>
                            <p className="lead mb-0 text-white">Os ganhos variam de acordo com a quantidade de indicações que concretizam a migração ou aquisição de plano.</p>
                        </div>
                        {/* <Counter4 /> */}
                       
                    </div>   
                    </div>
                    {/* </div> */}
                </section>
            <section>
                <div className="container">
                  <div className="row justify-content-center text-center">
                    <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">   
                      <div className="mb-8"> <span className="badge badge-primary-soft text-orange p-2 font-w-6">
                      Oportunidade com transparência 
                        </span>
                        <h2 className="mt-3 font-w-5">Veja como você pode fazer renda extra ou ter como sua principal renda com a Luminus Seguros</h2>             
                      </div>
                    </div>
                  </div> 
                  {/* / .row */}
                  <FeatureServices />
                  <div className="animation-circle-inverse">
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                 </div> 
                
                </section>
            
              {/*about end*/}
              {/*how it work start*/}
              <section className="custom-py-2 position-relative bg-waves" >
                <div className="container" >
                  <div className="row justify-content-center text-center">
                    <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                      <div className="mb-8"> <span className="badge badge-primary-soft p-2 text-orange font-w-6">
                          Como Funciona
                        </span>
                        <h2 className="mt-3 font-w-5 mb-0 text-white">Quer começar? Siga os seguintes passos:</h2>
                      </div>
                    </div>
                  </div>
                  {/* / .row */}
                  <div className="row align-items-center justify-content-between mb-10">
                    <div className="col-12 col-lg-6 mb-6 mb-lg-0">
                    <Tilt perspective="5000" transitionSpeed="3000">  
                      <img src={require(`../../assets/images/fill.svg`)} alt="Image" className="img-fluid" />
                      </Tilt>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5">
                      <div>
                        <h2> <span className="badge badge-primary-soft p-2 text-orange">
                            01
                          </span>
                        </h2>
                        <h4 className="mt-3 text-light">Pré-cadastro</h4>
                        <p className="lead mb-0 text-white">Faça seu pré-cadastro em nossa plataforma e nos deixe conhece-lo(a)</p>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center justify-content-between mb-10">
                    <div className="col-12 col-lg-6 order-lg-1 mb-6 mb-lg-0">
                    <Tilt perspective="5000" transitionSpeed="3000">  
                      <img src={require(`../../assets/images/hand.svg`)} alt="Image" className="img-fluid" />
                    </Tilt>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5">
                      <div>
                        <h2> <span className="badge badge-primary-soft p-2 text-orange">
                            02
                          </span>
                        </h2>
                        <h4 className="mt-3 text-light">Falaremos com você</h4>
                        <p className="lead mb-0 text-white">Um de nossos gestores de relacionamento entrará em contato para te conhecer melhor e fornecer todo conteúdo para seu bom desempenho.</p>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center justify-content-between">
                    <div className="col-12 col-lg-6 mb-6 mb-lg-0">
                    <Tilt perspective="5000" transitionSpeed="3000">  
                      <img src={require(`../../assets/images/rain.svg`)} alt="Image" className="img-fluid" />
                      </Tilt>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5">
                      <div>
                        <h2> <span className="badge badge-primary-soft p-2 text-orange">
                            03
                          </span>
                        </h2>
                        <h4 className="mt-3 text-light">Só benefício a todos</h4>
                        <p className="lead mb-0 text-white">Comece a ajudar seus contatos com a melhor consultoria em planos de saúde e faça sua renda com a Luminus Assessoria em Seguros.</p>
                      </div>
                    </div>
                
                  </div>
                </div>
                <div className="animation-circle-inverse">
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                <div className="shape-1" style={{height: '200px', overflow: 'hidden'}}>
                  <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
                    <path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{stroke: 'none', fill: '#fff'}} />
                  </svg>
                </div>
                <div className="shape-1 bottom" style={{height: '200px', overflow: 'hidden'}}>
                  <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
                    <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{stroke: 'none', fill: '#fff'}} />
                  </svg>
                </div>
                
              
          
              </section>
               <div className="container">
              <Videobox2 />
              {/* / .row */}
                </div>
)
           
              {/*how it work end*/}
              {/*team start*/}
              {/*  */}
              {/*blog end*/}
            </div>
         
          
        );
    }


export default Faq;