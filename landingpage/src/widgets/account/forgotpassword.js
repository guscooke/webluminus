import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ForgotPasswordForm extends Component {
    render() {
        return (
            <form id="contact-form" method="post" action="php/contact.php">
                <div className="messages" />
                <div className="form-group">
                <label>Email Address</label>
                <input id="form_email" type="email" name="email" className="form-control" placeholder="Email" required="required" data-error="Valid email is required." />
                <div className="help-block with-errors" />
                </div>
                <Link to="/sign-in" className="btn btn-primary btn-block">Login Now</Link>
            </form>
        );
    }
}

export default ForgotPasswordForm;