import React, { Component } from 'react';

class ContactForm1 extends Component {
    render() {
        return (
            <div className="row justify-content-center text-center">
                <div className="col-12 col-lg-10">
                    <form id="contact-form" className="row" method="post" action="php/contact.php">
                        <div className="messages" />
                        <div className="form-group col-md-6">
                            <input id="form_name" type="text" name="name" className="form-control" placeholder="Nome" required="required" data-error="Nome necessário." />
                            <div className="help-block with-errors" />
                        </div>
                        <div className="form-group col-md-12">
                            <input id="form_email" type="email" name="email" className="form-control" placeholder="Email" required="required" data-error="email valido é necessário." />
                            <div className="help-block with-errors" />
                        </div>
                        <div className="form-group col-md-12">
                            <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="Telefone" required="required" data-error="Telefone é necessário." />
                            <div className="help-block with-errors" />
                        </div>
                        <div className="form-group col-md-6">
                            <select className="form-control">
                                <option>Selecione o Serviço</option>
                                <option>Plano de saúde Empresarial</option>
                                <option>Plano de saúde Pessoa Física</option>
                                <option>Plano Odontóligo</option>
                                <option>Seguro de Vida</option>
                                <option>Parceiro Luminus</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <input id="form_subject" type="tel" name="subject" className="form-control" placeholder="Assunto" required="required" data-error="Deixe sua mensagem" />
                            <div className="help-block with-errors" />
                        </div>
                        <div className="form-group col-md-12">
                            <textarea id="form_message" name="message" className="form-control" placeholder="Mensagem" rows={4} required="required" data-error="Deixe sua mensagem." defaultValue={""} />
                            <div className="help-block with-errors" />
                        </div>
                        <div className="col-md-12 text-center mt-4">
                            <button className="btn btn-primary"><span>Enviar</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

export default ContactForm1;