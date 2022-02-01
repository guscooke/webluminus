import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pricingplan4 extends Component {
    render() {
        return (
           
              <div className="row align-items-center">
                <div className="col-12 col-md-12 col-lg-4 order-lg-1 mb-8 mb-lg-0">
                  <div className="mb-0"> <span className="badge badge-primary-soft p-2">
                      <i className="la la-money ic-3x rotation" />
                    </span>
                    <h2 className="mt-3">Simple, Fair and affordable prices for all.</h2>
                    <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-8">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-6 mb-8 mb-lg-0">
                      {/* Card */}
                      <div className="card border-0 shadow">
                        {/* Body */}
                        <div className="card-body py-8 px-6">
                          {/* Badge */}
                          <div className="text-center mb-5"> <span className="badge shadow">
                              <span className="h6 text-uppercase">Monthly</span>
                            </span>
                          </div>
                          <div className="mb-5">
                            <img className="img-fluid" src={require(`../../assets/images/svg/01.svg`)} alt="" />
                          </div>
                          {/* Features */}
                          <div className="d-flex align-items-start justify-content-between">
                            {/* Text */}
                            <p>Free Custom Domain</p>
                            {/* Check */}
                            <div className="ml-4"> <i className="la la-check text-primary font-weight-bold" />
                            </div>
                          </div>
                          <div className="d-flex align-items-start justify-content-between">
                            {/* Text */}
                            <p>Monthly updates</p>
                            {/* Check */}
                            <div className="ml-4"> <i className="la la-check text-primary font-weight-bold" />
                            </div>
                          </div>
                          <div className="d-flex align-items-start justify-content-between">
                            {/* Text */}
                            <p>Outstanding Support</p>
                            {/* Check */}
                            <div className="ml-4"> <i className="la la-check text-primary font-weight-bold" />
                            </div>
                          </div>
                          <div className="d-flex align-items-start justify-content-between">
                            {/* Text */}
                            <p>Happy Customers</p>
                            {/* Check */}
                            <div className="ml-4"> <i className="la la-check text-primary font-weight-bold" />
                            </div>
                          </div>
                          {/* Price */}
                          <div className="d-flex justify-content-center mt-5"> <span className="h3 mb-0 mt-2">$</span>
                            <span className="price display-3 text-primary font-w-6">59</span>
                          </div>
                          {/* Text */}
                          <p className="text-center text-muted">Per user</p>
                          {/* Button */} <Link to="/" className="btn btn-block btn-primary mt-5">
                            Choose Packege
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      {/* Card */}
                      <div className="card border-0 shadow">
                        {/* Body */}
                        <div className="card-body py-8 px-6">
                          {/* Badge */}
                          <div className="text-center mb-5"> <span className="badge shadow">
                              <span className="h6 text-uppercase">Yearly</span>
                            </span>
                          </div>
                          <div className="mb-5">
                            <img className="img-fluid" src={require(`../../assets/images/svg/02.svg`)} alt="" />
                          </div>
                          {/* Features */}
                          <div className="d-flex align-items-start justify-content-between">
                            {/* Text */}
                            <p>Free Custom Domain</p>
                            {/* Check */}
                            <div className="ml-4"> <i className="la la-check text-primary font-weight-bold" />
                            </div>
                          </div>
                          <div className="d-flex align-items-start justify-content-between">
                            {/* Text */}
                            <p>Monthly updates</p>
                            {/* Check */}
                            <div className="ml-4"> <i className="la la-check text-primary font-weight-bold" />
                            </div>
                          </div>
                          <div className="d-flex align-items-start justify-content-between">
                            {/* Text */}
                            <p>Outstanding Support</p>
                            {/* Check */}
                            <div className="ml-4"> <i className="la la-check text-primary font-weight-bold" />
                            </div>
                          </div>
                          <div className="d-flex align-items-start justify-content-between">
                            {/* Text */}
                            <p>Happy Customers</p>
                            {/* Check */}
                            <div className="ml-4"> <i className="la la-check text-primary font-weight-bold" />
                            </div>
                          </div>
                          {/* Price */}
                          <div className="d-flex justify-content-center mt-5"> <span className="h3 mb-0 mt-2">$</span>
                            <span className="price display-3 text-primary font-w-6">89</span>
                          </div>
                          {/* Text */}
                          <p className="text-center text-muted">Per user</p>
                          {/* Button */} <Link to="/" className="btn btn-block btn-primary mt-5">
                            Choose Packege
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
       
         
        );
    }
}

export default Pricingplan4;