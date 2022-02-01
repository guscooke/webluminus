import React, { Component } from 'react';

class Services extends Component {
    render() {
        return (
            <section className="custom-pt-1 custom-pb-2 bg-dark position-relative" data-bg-img={require(`../../assets/images/bg/02.png`)}>
                    <div className="container">
                        <div className="row align-items-end">
                        <div className="col-lg-4 col-md-6 mb-8 mb-lg-0 text-white">
                            <div> <span className="badge badge-primary-soft p-2">
                                <i className="la la-cubes ic-3x rotation" />
                            </span>
                            <h2 className="mt-3 mb-0">One Platform, Deep Insight Why Choose Bootsland</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="bg-primary-soft rounded p-5">
                            <div className="d-flex align-items-center mb-4">
                                <div className="mr-3">
                                <img className="img-fluid" src={require(`../../assets/images/icon/01.svg`)} alt="" />
                                </div>
                                <h5 className="m-0 text-light">App Development</h5>
                            </div>
                            <p className="mb-0">Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-6 mt-md-0">
                            <div className="bg-primary-soft rounded p-5">
                            <div className="d-flex align-items-center mb-4">
                                <div className="mr-3">
                                <img className="img-fluid" src={require(`../../assets/images/icon/02.svg`)} alt="" />
                                </div>
                                <h5 className="m-0 text-light">Clean Code</h5>
                            </div>
                            <p className="mb-0">Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-6">
                            <div className="bg-primary-soft rounded p-5">
                            <div className="d-flex align-items-center mb-4">
                                <div className="mr-3">
                                <img className="img-fluid" src={require(`../../assets/images/icon/03.svg`)} alt="" />
                                </div>
                                <h5 className="m-0 text-light">Software Development</h5>
                            </div>
                            <p className="mb-0">Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-6">
                            <div className="bg-primary-soft rounded p-5">
                            <div className="d-flex align-items-center mb-4">
                                <div className="mr-3">
                                <img className="img-fluid" src={require(`../../assets/images/icon/04.svg`)} alt="" />
                                </div>
                                <h5 className="m-0 text-light">Easy to customize</h5>
                            </div>
                            <p className="mb-0">Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-6">
                            <div className="bg-primary-soft rounded p-5">
                            <div className="d-flex align-items-center mb-4">
                                <div className="mr-3">
                                <img className="img-fluid" src={require(`../../assets/images/icon/05.svg`)} alt="" />
                                </div>
                                <h5 className="m-0 text-light">24/7 Support</h5>
                            </div>
                            <p className="mb-0">Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="shape-1" style={{height: '150px', overflow: 'hidden'}}>
                        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
                        <path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{stroke: 'none', fill: '#fff'}} />
                        </svg>
                    </div>
                    <div className="shape-1 bottom" style={{height: '200px', overflow: 'hidden'}}>
                        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
                        <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{stroke: 'none', fill: '#fff'}} />
                        </svg>
                    </div>
                    </section>
                   
        );
    }
}

export default Services;