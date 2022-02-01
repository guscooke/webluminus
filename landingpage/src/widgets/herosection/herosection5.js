import React, { Component } from 'react';
import Videobox2 from '../vediolightbox.js/videobox2';
import Typed from 'react-typed';

class Herosection5 extends Component {
    render() {
        return (
            <section>
            <div className="container">
              <div className="row justify-content-center mb-8">
                <div className="col-12 col-lg-8 text-center">
                  {/* Heading */}
                  <h4>Created For <Typed
                    className="text-primary"
                    strings={['Sass','Software','Startup','WebApp','Agency','Marketing','Designer','Developer']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                  </Typed></h4>
                  <h1 className="display-4 mt-3 font-w-5">
                    Bootsland All In One Solution For Your Website
                      </h1>
                  {/* Text */}
                  <p className="lead text-muted">Build a Beautiful, Clean &amp; Modern Design website with flexible Bootstrap components.</p>
                </div>
              </div>
              {/* / .row */}
              <Videobox2 />
            </div>
            {/* / .container */}
          </section>
       
        );
    }
}

export default Herosection5;