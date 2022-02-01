import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Herosection7 extends Component {
  render() {
    return (
      <div className="row align-items-center">
        <div className="col-12 col-lg-5 col-xl-6 order-lg-2 mb-8 mb-lg-0">
          {/* Image */}
          <img src={require(`../../assets/images/hero/05.png`)} className="img-fluid" alt="..." />
        </div>
        <div className="col-12 col-lg-7 col-xl-6 order-lg-1">
          {/* Heading */}
          <h1 className="display-4 mt-3">
            Download the app and start your journey now.
                      </h1>
          {/* Text */}
          <p className="lead text-muted">Build a Beautiful, Clean &amp; Modern Design website with flexible Bootstrap components.</p>
          {/* Buttons */}
          <Link to="/" className="btn btn-primary text-white text-left mr-1"> <i className="la la-apple mr-2 ic-2x d-inline-block" />
            <div className="d-inline-block"> <small className="d-block">Available On The</small>
                      App Store</div>
          </Link>
          <Link to="/" className="btn btn-dark text-white text-left"> <i className="la la-android mr-2 ic-2x d-inline-block" />
            <div className="d-inline-block"> <small className="d-block">Android App On</small>
                      Google Play</div>
          </Link>
        </div>
      </div>


    );
  }
}

export default Herosection7;