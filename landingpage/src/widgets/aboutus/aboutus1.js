import React, { Component } from 'react';

class Memberaboutus1 extends Component {
    render() {
        return (
            <section className="pb-11">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-12 col-lg-6 mb-6 mb-lg-0">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <img src={require(`../../assets/images/about/10.jpg`)} className="img-fluid rounded shadow-lg" alt="..." />
                                </div>
                                <div className="col-6">
                                    <img src={require(`../../assets/images/about/11.jpg`)} className="img-fluid rounded shadow-lg mb-5" alt="..." />
                                    <img src={require(`../../assets/images/about/13.jpg`)} className="img-fluid rounded shadow-lg" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-5">
                            <div> <span className="badge badge-primary-soft p-2 font-w-6">
                                About Bootsland
                                </span>
                                <h2 className="mt-3 font-w-5">Bootsland Small Tean Crafting Beautiful Experience</h2>
                                <p className="lead">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                <p className="mb-0">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Memberaboutus1;