import React, { Component } from 'react';

class ContactForm2 extends Component {
    render() {
        return (
            <form id="contact-form" className="row" method="post" action="php/contact.php">
                <div className="messages" />
                <div className="form-group col-md-6">
                    <input id="form_name" type="text" name="name" className="form-control" placeholder="First Name" required="required" data-error="Name is required." />
                    <div className="help-block with-errors" />
                </div>
                <div className="form-group col-md-6">
                    <input id="form_name1" type="text" name="name" className="form-control" placeholder="Last Name" required="required" data-error="Name is required." />
                    <div className="help-block with-errors" />
                </div>
                <div className="form-group col-md-12">
                    <input id="form_email" type="email" name="email" className="form-control" placeholder="Email" required="required" data-error="Valid email is required." />
                    <div className="help-block with-errors" />
                </div>
                <div className="form-group col-md-12">
                    <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="Phone" required="required" data-error="Phone is required" />
                    <div className="help-block with-errors" />
                </div>
                <div className="form-group col-md-6">
                    <select className="form-control">
                        <option>- Select Service</option>
                        <option>Consulting</option>
                        <option>Finance</option>
                        <option>Marketing</option>
                        <option>Avanced Analytics</option>
                        <option>planning</option>
                    </select>
                </div>
                <div className="form-group col-md-6">
                    <input id="form_subject" type="tel" name="subject" className="form-control" placeholder="Subject" required="required" data-error="Subject is required" />
                    <div className="help-block with-errors" />
                </div>
                <div className="form-group col-md-12">
                    <textarea id="form_message" name="message" className="form-control" placeholder="Message" rows={4} required="required" data-error="Please,leave us a message." defaultValue={""} />
                    <div className="help-block with-errors" />
                </div>
                <div className="col-md-12 mt-4">
                    <button className="btn btn-primary"><span>Send Messages</span>
                    </button>
                </div>
            </form>

        );
    }
}

export default ContactForm2;