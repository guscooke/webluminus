/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Memberaboutus from '../../../widgets/aboutus/aboutus';

import Pageheading from '../../../widgets/Pageheading';




class Aboutus extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>

                <section className="position-relative">
                    <Pageheading  title={"Quem Somos"}/>
               </section>
                <div className="page-content">
                    {/*about start*/}
                    <section>
                        <div className="container">
                            <Memberaboutus />
                        </div>
                    </section> 
                   
                    {/*about end*/}
                    {/*feature start*/}
                 
                    {/*feature end*/}
                    {/*testimonial start*/}
                   
                    {/*blog end*/}
                </div>
            </div>
        );
    }
}

export default Aboutus;