import React, { Component } from 'react';
import SignUpForm from '../../../widgets/account/signup';
import { Col, Container, Row } from 'reactstrap';
import Pageheading from '../../../widgets/Pageheading';

class SignUp extends Component {
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
        <Pageheading foldername={"Account"} title={"Sign Up"} />
        </section>
        {/*hero section end*/}
        {/*body content start*/}
        <div className="page-content">
          {/*login start*/}
          <section className="register">
            <Container>
              <Row className="justify-content-center text-center">
                <Col className="col-lg-8 col-md-12">
                  <div className="mb-6"> <span className="badge badge-primary-soft p-2">
                    <i className="la la-exclamation ic-3x rotation" />
                  </span>
                    <h2 className="mt-3">Simple And Easy To Sign Up</h2>
                    <p className="lead">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                  </div>
                </Col>
              </Row>
              <SignUpForm />
            </Container>
          </section>
          {/*login end*/}
        </div>
        {/*body content end*/}
      </div>
    );
  }
}

export default SignUp;