import React, { Component } from 'react';
import SigninForm2 from '../../../widgets/account/signin2';
import { Col, Container, Row } from 'reactstrap';
import Pageheading from '../../../widgets/Pageheading';

class SignIn2 extends Component {
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
        <Pageheading foldername={"Account"} title={"Login 2"} />
        
        </section>
        {/*hero section end*/}
        {/*body content start*/}
        <div className="page-content">
          {/*login start*/}
          <section>
            <Container>
              <Row className="align-items-center">
                <Col className="col-lg-7 col-12">
                  <img className="img-fluid" src={require(`../../../assets/images/login.png`)} alt="" />
                </Col>
                <Col className="col-lg-5 col-12">
                  <SigninForm2 />
                </Col>
              </Row>
            </Container>
          </section>
          {/*login end*/}
        </div>
        {/*body content end*/}
      </div>
    );
  }
}

export default SignIn2;