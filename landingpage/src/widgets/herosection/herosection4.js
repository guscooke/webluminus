import React, { Component } from 'react';

class Herosection4 extends Component {
    render() {
        return (
            <section className="custom-pt-1 custom-pb-2 bg-primary position-relative">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-lg-5 col-xl-6 order-lg-2 mb-8 mb-lg-0">
                  {/* Image */}
                  <img src={require(`../../assets/images/hero/02.png`)} className="img-fluid" alt="..." />
                </div>
                <div className="col-12 col-lg-7 col-xl-6 order-lg-1">
                  {/* Heading */}
                  <h5 className="badge badge-light">Build anything you want</h5>
                  <h1 className="display-4 text-white mt-3">
                    Become part of the early adopter's programme.
                      </h1>
                  {/* Text */}
                  <p className="lead text-light">Build a Beautiful, Clean &amp; Modern Design website with flexible Bootstrap components.</p>
                  <div className="subscribe-form border rounded p-3">
                    <form id="mc-form" className="group">
                      <div className="d-sm-flex align-items-center form-group mb-0">
                        <input type="email" defaultValue name="EMAIL" className="email form-control" id="mc-email" placeholder="Email Address" required />
                        <input className="btn btn-success ml-sm-2 mt-2 mt-sm-0" type="submit" name="subscribe" defaultValue="Get Started" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* / .row */}
            </div>
            {/* / .container */}
            <div className="shape-1 bottom" style={{ height: '100px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" preserveAspectRatio="none" className="w-100 h-100">
                <circle fill="white" cx={0} cy={100} r={100} />
                <circle fill="white" cx={200} cy={100} r={100} />
              </svg>
            </div>
          </section>
         
        );
    }
}

export default Herosection4;