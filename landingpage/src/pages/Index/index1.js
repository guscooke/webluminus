import React, { Component } from 'react';
import About from '../../widgets/index/about';
import Services from '../../widgets/index/services';
import Work from '../../widgets/index/work';
import Feature from '../../widgets/featurebox/feature';
import Testimonial1 from '../../widgets/testimonial/testimonial1';
import Herosection from '../../widgets/herosection/herosection';
import Blog4 from '../../widgets/blog/blog4';

class Index extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <section>
                    <div className="container">
                        <Herosection />
                    </div>
                </section>
                <div className="page-content">
                    {/*feature start*/}
                    <Feature />
                    {/*feature end*/}
                    {/*about start*/}
                    <About />
                    {/*about end*/}
                    {/*services start*/}
                    <Services />
                    {/*services end*/}
                    {/*work start*/}
                    <Work />
                    {/*work end*/}
                    {/*testimonial start*/}
                    <section className="position-relative">
                        <div className="shape-2 transform-md-rotate" style={{ overflow: 'hidden' }}>
                            <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                                <path d="M208.09,0.00 C152.70,67.10 262.02,75.98 200.80,150.00 L0.00,150.00 L0.00,0.00 Z" style={{ stroke: 'none', fill: '#1360ef' }} />
                            </svg>
                        </div>
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-12 col-md-12 col-lg-4 mb-6 mb-lg-0">
                                    <div> <span className="badge badge-light-soft p-2">
                                        <i className="la la-users ic-3x rotation" />
                                    </span>
                                        <h2 className="mt-4 text-white">Discover Our Client Feedback</h2>
                                        <p className="lead mb-0 text-white">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                                    </div>
                                </div>
                                <Testimonial1 />
                            </div>
                            {/* / .row */}
                        </div>
                    </section>
                    {/*testimonial end*/}
                    {/*blog start*/}
                    <section>
                        <div className="container">
                            <div className="row align-items-end mb-5">
                                <div className="col-12 col-md-12 col-lg-4">
                                    <div> <span className="badge badge-primary-soft p-2">
                                        <i className="la la-bold ic-3x rotation" />
                                    </span>
                                        <h2 className="mt-4 mb-0">From Our Blog List Latest Feed</h2>
                                    </div>
                                </div>
                                <div className="col-12 col-md-12 col-lg-6 ml-auto">
                                    <div>
                                        <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                                    </div>
                                </div>
                            </div>
                            <Blog4 />
                        </div>
                    </section>
                    {/*blog end*/}
                </div>
            </div>
        );
    }
}

export default Index;