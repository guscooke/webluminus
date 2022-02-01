import React, { Component } from 'react';
import SigninForm from '../../../widgets/account/singin';
import { Col, Container, Row } from 'reactstrap';
import Pageheading from '../../../widgets/Pageheading';

class SignIn1 extends Component {
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
                <Pageheading foldername={"Account"} title={"Login"} />
                    
                </section>
                {/*hero section end*/}
                {/*body content start*/}
                <div className="page-content">
                    {/*login start*/}
                    <section>
                        <Container>
                            <Row  className="justify-content-center">
                                <Col className="col-5">
                                  <SigninForm />
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

export default SignIn1;