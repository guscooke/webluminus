import React, { Component } from 'react';
import RegistrationForm from '../../../widgets/career/registrationform';
import Pageheading from '../../../widgets/Pageheading';

class CareerSingle extends Component {
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
        {/*hero section start*/}
        <section className="position-relative">
          <Pageheading foldername={"Company"} title={"Trabalhe Conosco"} />
        </section>
        {/*hero section end*/}
        {/*body content start*/}
        <RegistrationForm />
        {/*body content end*/}
      </div>
    );
  }
}

export default CareerSingle;