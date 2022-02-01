//* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';  
window.fn = OwlCarousel;

class Testimonial4 extends Component {
    render() {
        return (
            <div className="row justify-content-center text-center">
            <div className="col-12">
             
              {/* <div className="owl-carousel no-pb owl-2" data-dots="false" data-nav="true" data-items={1} data-autoplay="true"> */}
              <OwlCarousel
                    className="owl-carousel no-pb owl-2"
                    dotData={false}
                    nav={true}
                    items={1}
                    autoplay={true}
                    dots={false}
                    loop={true}

                >
                              
<div className="item">
  <section className="testimonial-section"> 
    <div className="large-container">
      <div className="sec-title">
        <span className="title">Depoimentos</span>
        <h2>O que os nossos clientes andam falando sobre nós ?</h2>
      </div>
    
        {/* Testimonial Block */}
        <div className="testimonial-block">
          <div className="inner-box">
            <div className="text"><p>Why is this important? Because clients want to know the businesses they depend on for advice, are well managed in their own right.  Not only that but this event gives you the chance to give your back-office team</p></div>
            <div className="info-box">
              <div className="thumb"><img src="http://t.commonsupport.com/adro/images/resource/thumb-1.jpg" alt="" /></div>
              <h4 className="name">Mahfuz Riad</h4>
              <span className="designation">Ui Designer &amp; CEO</span>
            </div>
          </div>
        </div>
        {/* Testimonial Block */}
        <div className="testimonial-block">
          <div className="inner-box">
            <div className="text">Why is this important? Because clients want to know the businesses they depend on for advice, are well managed in their own right.  Not only that but this event gives you the chance to give your back-office team</div>
            <div className="info-box">
              <div className="thumb"><img src="http://t.commonsupport.com/adro/images/resource/thumb-1.jpg" alt="" /></div>
              <h4 className="name">Mahfuz Riad</h4>
              <span className="designation">Ui Designer &amp; CEO</span>
            </div>
          </div>
        </div>
        {/* Testimonial Block */}
        <div className="testimonial-block">
          <div className="inner-box">
            <div className="text">Why is this important? Because clients want to know the businesses they depend on for advice, are well managed in their own right.  Not only that but this event gives you the chance to give your back-office team</div>
            <div className="info-box">
              <div className="thumb"><img src="http://t.commonsupport.com/adro/images/resource/thumb-1.jpg" alt="" /></div>
              <h4 className="name">Mahfuz Riad</h4>
              <span className="designation">Ui Designer &amp; CEO</span>
            </div>
          </div>
        </div>
      </div>
  
  </section>
  </div>
  {/*End Testimonial Section */}
  


              </OwlCarousel>
            </div>
          </div>
       
             
        );
    }
}

export default Testimonial4;