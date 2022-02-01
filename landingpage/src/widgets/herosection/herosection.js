import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Clientlogo from '../common/Clientlogo';

class Herosection extends Component {
    render() {
        return (

            <div className="row align-items-center">
                <div className="col-12 col-lg-5 col-lg-6 order-lg-2 mb-8 mb-lg-0">
                    {/* Image */}
                    <img src={require(`../../assets/images/hero/01.png`)} className="img-fluid" alt="..." />
                </div>
                <div className="col-12 col-lg-7 col-xl-6 order-lg-1">
                    {/* Heading */}
                    <h5 className="badge badge-primary-soft font-w-6">Ever Created For</h5>
                    <h1 className="display-4">
                        Let's Work With <span className="text-primary">Bootsland</span>
                    </h1>
                    {/* Text */}
                    <p className="lead text-muted">Build a Beautiful, Clean &amp; Modern Design website with flexible Bootstrap components.</p>
                    {/* Buttons */} <Link to="/" className="btn btn-primary shadow mr-1">
                        Learn More
                            </Link>
                    <Link to="/" className="btn btn-outline-primary">
                        Get Started
                            </Link>
                    <Clientlogo logoitems={4} margintop={10} />
                </div>
            </div>

        );
    }
}

export default Herosection;