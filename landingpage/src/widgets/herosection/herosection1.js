import React, { Component } from 'react';
import { Parallax,ParallaxProvider  } from 'react-scroll-parallax';
import Videobox1 from '../vediolightbox.js/videobox1';

class Herosection1 extends Component { 
    render() {
        return (
          <section className="position-relative overflow-hidden-sm pb-0">
            <div className="container">
              <Videobox1 />
            
            </div>
            <div className="page-content"> 
              <div className="shape-1 bottom" style={{ height: '100px', overflow: 'hidden' }}>
              <svg className= "img-static" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                <polygon className="svg--sm" fill="gray" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100" />
                <polygon className="svg--lg" fill="#F26B40" points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100" />
                
              </svg>
            </div>
            </div>
            {/* / .container */}
            <div className="container-fluid ">
              <div className="row">
                <div className="col-10">
                  {/* <div className="heroparallax"> */}
              
                  <ParallaxProvider>
                    <Parallax className="heroparallax" x={[-20, 20]} >
                      <img className= "img-fluid d-none d-sm-block" src={require(`../../assets/images/hero/luminusx.png`)} alt="" />
                    </Parallax>
                  </ParallaxProvider >
                  
                </div>
              </div>
            </div>
            
          </section>
         
        );
    }
}

export default Herosection1;


