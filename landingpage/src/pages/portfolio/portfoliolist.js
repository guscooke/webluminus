/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Gallrylist from '../../widgets/portfolio/gallrylist';
import Pageheading from '../../widgets/Pageheading';

class Portfoliolist extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        {/*hero section start*/}
        <section className="position-relative">
          <Pageheading foldername={"Portfoilosingle"} title={"Hospitais e Operadoras"} />
        </section>
        {/*hero section end*/}
        {/*body content start*/}
        <div className="page-content">
          {/*portfolio start*/}
          <section>
            <div className="container">
              <div className="row align-items-end mb-8">
                <div className="col-12 col-md-12 col-lg-5">
                  <div> <span className="badge badge-primary-soft p-2 font-w-6">
                    saiba +
                        </span>
                    <h2 className="mt-3">Conheça os principais Hospitais e Operadoras de São Paulo</h2>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6 ml-auto">
                  <div>
                    <p className="lead mb-0">O Estado de São Paulo possui alguns dos melhores hospitais do Brasil, avaliados pela Agência Nacional de Saúde Suplementar (ANS), com referência em critérios como qualidade de atendimento, eficiência e alta tecnologia.</p>

                  </div>
                </div>
              </div>
            </div>
            <Gallrylist />
          </section>
          {/*portfolio end*/}
        </div>
        {/*body content end*/}
      </div>
    );
  }
}

export default Portfoliolist;