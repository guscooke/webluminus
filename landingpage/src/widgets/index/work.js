import React, { Component } from 'react';

class Work extends Component {
    render() {
        return (
            <section className="pt-0">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                    <div className="col-12 col-lg-6 order-lg-2 mb-6 mb-lg-0">
                        <img src={require(`../../assets/images/about/02.png`)} alt="Image" className="img-fluid" />
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5 order-lg-1">
                        <div> <span className="badge badge-primary-soft p-2">
                            <i className="la la-exclamation ic-3x rotation" />
                        </span>
                        <h2 className="mt-3">Bootsland Focus on your success</h2>
                        <p className="lead mb-5">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                        </div>
                        <div className="d-flex align-items-center">
                        <img alt="Image" src={require(`../../assets/images/testimonial/01.jpg`)} className="shadow-primary img-fluid rounded-circle d-inline mr-3" />
                        <div>
                            <h5>Kendra Law</h5>
                            <span className="text-muted">Web Developer</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Work;