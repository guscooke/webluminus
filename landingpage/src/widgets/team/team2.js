import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Team2 extends Component {
    render() {
        return (
            <div className="col-12 col-md-12 col-lg-8">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6 col-md-6 mb-8 mb-lg-0">
                <div className="p-3 d-flex align-items-center shadow">
                  <div className="mr-5">
                    <img className="img-fluid rounded-top" src={require(`../../assets/images/team/01.png`)} alt="" />
                  </div>
                  <div>
                    <small className="text-primary mb-1 d-block">Manager</small>
                    <h5 className="mb-2">Vinit Saw</h5>             
                    <p>Build a Beautiful, Clean &amp; Modern Design website.</p>
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item"><Link className="text-muted" to="/"><i className="la la-facebook h4" /></Link>
                      </li>
                      <li className="list-inline-item"><Link className="text-muted h6" to="/"><i className="la la-dribbble h4" /></Link>
                      </li>
                      <li className="list-inline-item"><Link className="text-muted h6" to="/"><i className="la la-twitter h4" /></Link>
                      </li>
                      <li className="list-inline-item"><Link className="text-muted h6" to="/"><i className="la la-linkedin h4" /></Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="p-3 d-flex align-items-center shadow mt-8">
                  <div className="mr-5">
                    <img className="img-fluid rounded-top" src={require(`../../assets/images/team/02.png`)} alt="" />
                  </div>
                  <div>
                    <small className="text-primary mb-1 d-block">Ceo</small>
                    <h5 className="mb-2">Nina Loe</h5>            
                    <p>Build a Beautiful, Clean &amp; Modern Design website.</p> 
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item"><Link className="text-muted" to="/"><i className="la la-facebook h4" /></Link>
                      </li>
                      <li className="list-inline-item"><Link className="text-muted h6" to="/"><i className="la la-dribbble h4" /></Link>
                      </li>
                      <li className="list-inline-item"><Link className="text-muted h6" to="/"><i className="la la-twitter h4" /></Link>
                      </li>
                      <li className="list-inline-item"><Link className="text-muted h6" to="/"><i className="la la-linkedin h4" /></Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-md-6 mb-8 mb-lg-0">
                <div className="text-center shadow p-5">
                  <div className="mb-3">
                    <img className="img-fluid rounded-top" src={require(`../../assets/images/team/03.png`)} alt="" />
                  </div>
                  <div>
                    <small className="text-primary mb-1 d-block">Founder</small>
                    <h5 className="mb-2">Renut John</h5>             
                    <p>Build a Beautiful, Clean &amp; Modern Design website.</p>
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item"><Link className="text-muted" to="/"><i className="la la-facebook h4" /></Link>
                      </li>
                      <li className="list-inline-item"><Link className="text-muted h6" to="/"><i className="la la-dribbble h4" /></Link>
                      </li>
                      <li className="list-inline-item"><Link className="text-muted h6" to="/"><i className="la la-twitter h4" /></Link>
                      </li>
                      <li className="list-inline-item"><Link className="text-muted h6" to="/"><i className="la la-linkedin h4" /></Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
        );
    }
}

export default Team2;