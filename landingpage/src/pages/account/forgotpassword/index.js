import React, { Component } from 'react';
import ForgotPasswordForm from '../../../widgets/account/forgotpassword';
import { Col, Container, Row } from 'reactstrap';
import Pageheading from '../../../widgets/Pageheading';
import { Link } from 'react-router-dom';

class ForgotPassword extends Component {
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
                <Pageheading foldername={"Account"} title={"Forgot Password"} />
                   
                </section>
                {/*hero section end*/}
                {/*body content start*/}
                <div className="page-content">
                    {/*login start*/}
                    <section>
                        <Container>
                            <Row className="justify-content-center">
                                <Col className="col-5">
                                    <div>
                                        <div className="text-center mb-5">
                                            <h2>Forgot your password?</h2>
                                            <p>Enter your email to reset your password.</p>
                                        </div>
                                        <ForgotPasswordForm />
                                        <div className="mt-4 text-center">
                                            <Link className="link-title" to="/sign-up">Back to sign in</Link>
                                        </div>
                                    </div>
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

export default ForgotPassword;