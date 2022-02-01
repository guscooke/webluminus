import React, { Component } from 'react';
import { useForm } from 'react-hook-form';

const RegistrationForm = () => {
  
      
      const { register, handleSubmit, errors } = useForm();
      const onSubmit =  async(data) => {          
        await fetch(
            "http://localhost/luminus_repo/backend/public/api/email",            
        )
        .then((response) => response.json())
        .then((response) => {   
          console.log('response');
        });
      };

        return (
            <div className="page-content">
              <section>
                <div className="container">
                  <div className="row justify-content-center text-center">
                    <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                    <div className="justify-content-between">
                  <div className="col-12 col-lg-12 mb-2">
                    <div className="row justify-content-center">
                      <img src={require(`../../assets/images/team/05.png`)} className="img-fluid center" alt="..." />
                      
                    </div>
                  </div>
                    <h2 className="mt-4">Já pensou em trabalhar em um lugar onde o principal objetivo é crescer junto e cooperar?</h2>
                      <p className="lead mb-0">Você quer desenvolver o seu talento na área de Corretagem de Seguros e nós temos as oportunidades. Envie seu currículo e venha aprender a transformar desafios em oportunidades.</p>
                        </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-12 justify-content-center">
                      <div className="row justify-content-center">
                        <div className="col-md-6">
                          <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" placeholder="Nome" name="Nome" className="email form-control" ref={register({required: true, maxLength: 80})} style={{height: '40px'}} />
                            <input type="text" placeholder="Email" name="Email" className="email form-control" ref={register({required: true, pattern: /^\S+@\S+$/i})} style={{height: '40px'}} />
                            <input type="file" ref={register} name="picture" />
                            <input type="submit" className="btn btn-primary btn-block mt-3 mb-12"  name="subscribe" defaultValue="subscribe" />
                            
                          </form>
                        </div>  
                      </div>     
                    </div>
                  </div>
                </div>
              </section>
            </div>


          
        );
    
}

export default RegistrationForm;