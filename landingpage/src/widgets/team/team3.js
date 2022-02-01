import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';  
window.fn = OwlCarousel;

class Team3 extends Component {
    render() {
        return (
            // <div className="owl-carousel" data-dots="false" data-nav="true" data-items={3} data-md-items={2} data-sm-items={2} data-margin={30} data-autoplay="true">
            <OwlCarousel
                    className="owl-carousel"
                    dotData={false}
                    items={3}
                    autoplay={true}
                    margin={30}
                    dots={false}
                    loop={true}
                    nav={true}

                >
            <div className="item">
              <div className="bg-primary-soft rounded text-center p-5">
                <div className="mb-3">
                  <img className="img-fluid rounded-top d-inline" src={require(`../../assets/images/team/01.png`)} alt="" />
                </div>
                <div>
                  <h5 className="mb-1 text-light">Vinit Saw</h5>
                  <small className="text-primary mb-3 d-block">Manager</small> 
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
            <div className="item">
              <div className="bg-primary-soft rounded text-center p-5">
                <div className="mb-3">
                  <img className="img-fluid rounded-top d-inline" src={require(`../../assets/images/team/02.png`)} alt="" />
                </div>
                <div>
                  <h5 className="mb-1 text-light">Nina Loe</h5>
                  <small className="text-primary mb-3 d-block">Ceo</small> 
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
            <div className="item">
              <div className="bg-primary-soft rounded text-center p-5">
                <div className="mb-3">
                  <img className="img-fluid rounded-top d-inline" src={require(`../../assets/images/team/03.png`)} alt="" />
                </div>
                <div>
                  <h5 className="mb-1 text-light">Renut John</h5>
                  <small className="text-primary mb-3 d-block">Founder</small> 
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
            <div className="item">
              <div className="bg-primary-soft rounded text-center p-5">
                <div className="mb-3">
                  <img className="img-fluid rounded-top d-inline" src={require(`../../assets/images/team/02.png`)} alt="" />
                </div>
                <div>
                  <h5 className="mb-1 text-light">Celio Jemy</h5>
                  <small className="text-primary mb-3 d-block">Founder</small> 
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
          </OwlCarousel>
       
        );
    }
}

export default Team3;