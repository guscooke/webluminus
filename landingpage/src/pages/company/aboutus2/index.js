import React, { Component } from 'react';
import Test from '../../../widgets/testimonial/testimonial3';
import Pageheading from '../../../widgets/Pageheading';

class Aboutus2 extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <section className="position-relative">
                    <Pageheading />
                 
                  
                    {/* <section className="position-relative"> */}
              <div className="container">
                    {/*about start*/}
                       <Test />
                    {/*about end*/}
                    {/*counter start*/}
                </div>
                </section>
                {/* </section> */}
            </div>

        );
    }
}

export default Aboutus2;