import React, { Component } from 'react';
import {useForm} from "react-hook-form";

const Cta = () => {
  
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
            <div className="col-12 col-lg-5 col-xl-4 mr-auto mb-6 mb-lg-0">
              <div className="subscribe-form bg-white p-5 rounded">
                  <h5 className="mb-4 text-orange">Quer saber mais ?</h5>
                  <h6 className="text-orange">Deixe seu contato</h6>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input type="text" placeholder="Nome" name="Nome" className="email form-control" ref={register({required: true, maxLength: 80})} style={{height: '40px'}} />
                    <input type="text" placeholder="Email" name="Email" className="email form-control" ref={register({required: true, pattern: /^\S+@\S+$/i})} style={{height: '40px'}} />
                    <input type="tel" placeholder="Telefone" name="Telefone" className="email form-control" ref={register({required: true, maxLength: 12})} style={{height: '40px'}} />
                    <br/>
                    <h6 className="text-orange">Possui CNPJ ?</h6>
                  <select className="email form-control" name="Possui CNPJ" ref={register({ required: true })}>
                    <option value="Yes">Sim</option>
                    <option value="No">Não</option>
                  </select>
      
            <input type="submit" className="btn btn-outline-dark text-orange btn-block mt-3 mb-2"  name="subscribe" defaultValue="Subscribe" />
          </form>
          </div>
          </div>
        );
      }


export default Cta;



