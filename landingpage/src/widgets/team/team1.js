import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Team1 extends Component {
    render() {
        return (
            <div className="row">
            <div className="col-12 col-lg-3 col-md-6 mb-8 mb-lg-0">
              <div className="text-center hover-translate p-5">
                <div className="mb-3">
                  <img className="img-fluid rounded-top" src={require(`../../assets/images/team/01.png`)} alt="" />
                </div>
                <div>
                  <h6 className="mb-1">Vinit Saw</h6>
                  <small className="text-muted mb-3 d-block">Manager</small> 
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
            <div className="col-12 col-lg-3 col-md-6 mb-8 mb-lg-0">
              <div className="text-center shadow hover-translate p-5">
                <div className="mb-3">
                  <img className="img-fluid rounded-top" src={require(`../../assets/images/team/02.png`)} alt="" />
                </div>
                <div>
                  <h6 className="mb-1">Nina Loe</h6>
                  <small className="text-muted mb-3 d-block">Ceo</small> 
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
            <div className="col-12 col-lg-3 col-md-6 mb-8 mb-md-0">
              <div className="text-center hover-translate p-5">
                <div className="mb-3">
                  <img className="img-fluid rounded-top" src={require(`../../assets/images/team/03.png`)} alt="" />
                </div>
                <div>
                  <h6 className="mb-1">Renut John</h6>
                  <small className="text-muted mb-3 d-block">Founder</small> 
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
            <div className="col-12 col-lg-3 col-md-6">
              <div className="text-center hover-translate p-5">
                <div className="mb-3">
                  <img className="img-fluid rounded-top" src={require(`../../assets/images/team/04.png`)} alt="" />
                </div>
                <div>
                  <h6 className="mb-1">Biton Leeny</h6>
                  <small className="text-muted mb-3 d-block">Supervisor</small> 
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
        
        );
    }
}

export default Team1;