import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Herosection2 extends Component {
    render() {
        return (
            <section className="custom-pt-1 custom-pb-3 bg-primary position-relative parallaxie" data-bg-img={require(`../../assets/images/bg/03.png`)}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-lg-5 col-xl-5 mr-auto mb-8 mb-lg-0">
                  {/* Image */}
                  <img src={require(`../../assets/images/hero/02.png`)} className="img-fluid" alt="..." />
                </div>
                <div className="col-12 col-lg-7 col-xl-6">
                  {/* Heading */}
                  <h1 className="display-4 text-white">
                    Change the way you build websites With <span className="font-weight-bold">Bootsland</span>
                  </h1>
                  {/* Text */}
                  <p className="lead text-light">Build a Beautiful, Clean &amp; Modern Design website with flexible Bootstrap components.</p>
                  {/* Buttons */} <Link to="/" className="btn btn-outline-light mr-1">
                    Learn More
                      </Link>
                  <a href="http://vimeo.com/99025203" className="btn text-white popup-vimeo"> <i className="la la-play-circle mr-1 ic-3x align-middle" /> Watch Video</a>
                </div>
              </div>
              {/* / .row */}
            </div>
            {/* / .container */}
            <div className="shape-1 bottom" style={{ height: '250px', overflow: 'hidden' }}>
              <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#fff' }} />
              </svg>
            </div>
          </section>
        
        );
    }
}

export default Herosection2;