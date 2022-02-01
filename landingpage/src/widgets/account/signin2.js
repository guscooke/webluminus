import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SigninForm2 extends Component {
    render() {
        return (
            <div>
                <h2 className="mb-3">Sign In</h2>
                <form id="contact-form" method="post" action="php/contact.php">
                    <div className="messages" />
                    <div className="form-group">
                        <input id="form_name" type="text" name="name" className="form-control" placeholder="User name" required="required" data-error="Username is required." />
                        <div className="help-block with-errors" />
                    </div>
                    <div className="form-group">
                        <input id="form_password" type="password" name="password" className="form-control" placeholder="Password" required="required" data-error="password is required." />
                        <div className="help-block with-errors" />
                    </div>
                    <div className="form-group mt-4 mb-5">
                        <div className="remember-checkbox d-flex align-items-center justify-content-between">
                            <div className="checkbox">
                                <input type="checkbox" id="check2" name="check2" />
                                <label htmlFor="check2">Remember me</label>
                            </div>
                            <Link to="/forgot-password">Forgot Password?</Link>
                        </div>
                    </div>    <Link to="/sign-in" className="btn btn-primary btn-block">Login Now</Link>
                </form>
                <div className="d-flex align-items-center text-center justify-content-center mt-4">
                    <span className="text-muted mr-1">Don't have an account?</span>
                    <Link to="/sign-up">Sign Up</Link>
                </div>
            </div>

        );
    }
}

export default SigninForm2;