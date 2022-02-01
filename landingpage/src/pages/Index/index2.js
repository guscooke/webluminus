import React, { Component } from 'react';
import Header3 from '../../layout/header/header3';
import Herosection1 from '../../widgets/herosection/herosection1';
import Clientlogo2 from '../../widgets/common/Clientelogo2';
import Testimonial2 from '../../widgets/testimonial/testimonial2';
import Worktab from '../../widgets/featuare/worktab';
import Card from '../../widgets/featuare/teste';
import CookieConsent from "react-cookie-consent";





class Index2 extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props)
  {
      super(props)
  }
  componentDidMount() {
      window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>


        {/*hero section start*/}
        <Herosection1 />
        {/*hero section end*/}
        {/*header start*/}

        
        <Header3 />
  
            
        {/*header end*/}
        {/*body content start*/}
        <div className="page-content">
          {/*services start*/}
          <section className="custom-pb-0 position-relative">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-12 col-lg-6 mb-6 mb-lg-0">
                <div class="row align-items-center no-gutters"> 
                <div class="col">
                 {/* <div className="beacon"></div> */}

                  <img src={require(`../../assets/images/hero/cloud1.png`)} alt="Nube" class="cloud c1" />
                  <img src={require(`../../assets/images/hero/cloud2.png`)} alt="Nube" class="cloud c2" />
                  <img src={require(`../../assets/images/hero/luminus6.png`)} alt="Image" class="img-fluid" />
                </div>
              </div>
                </div>
                <div className="col-12 col-lg-6 col-xl-5">
                  <div> 
                    <span className="badge badge-primary-soft p-2"></span> 
                      <h2 className="mt-5">Apoio e Proteção </h2>
                      <p>Acolhemos e servimos utilizando das melhores tecnologias a todos perfis de cliente sem perder o toque pessoal. Conte com quem sabe e cuida de você para algo tão importante que é a sua saúde, de seus familiares e colaboradores.
                      </p>         
                  </div>
                </div>
              </div>   
              </div>
            </section> 
              </div>
              <div className="container">
               <Card />
          
                </div>
                
                <div className="container">
                  <Worktab />
                </div>
                    <Clientlogo2 logoitems={8} margintop={10} /> 
                    <Testimonial2 />
                    <CookieConsent
                      location="bottom"
                      buttonText="Sim, concordo."
                      cookieName="myAwesomeCookieName2"
                      style={{ background: "#eee", color: "#000" }}
                      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                      expires={150}
                    >
                      <span style={{ fontSize: 12 }}>Utilizamos cookies para que você tenha a melhor experiência do nosso site. Por sua visita contínua ao nosso site, sem alterar suas configurações, você concorda com o uso de cookies da Luminus.</span>
                    </CookieConsent>
        
      </div>
      
    );
  }
}

export default Index2;