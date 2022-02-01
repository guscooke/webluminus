import React, { Component } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

class Worktab extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isOpen: false,
          SelectedTab: '1'
        }
        this.toggle = this.toggle.bind(this);
      }
      toggle(tab) {
        if (this.state.SelectedTab !== tab) {
          this.setState({
            SelectedTab: tab
          });
        }
      }
    render() {
        return (
            <div className="row">
            <div className="col-12">
              <nav>
             
              </nav>
              <Nav tabs className="d-flex justify-content-center border-0 ">
                        <NavItem className="shadow-lg">
                          <NavLink className={`border-50 `+ classnames({ active: this.state.SelectedTab === '1' })} onClick={() => { this.toggle('1'); }} >Planos Médicos</NavLink>
                        </NavItem>
                        <NavItem className="shadow-lg">
                          <NavLink className={`border-50 `+ classnames({ active: this.state.SelectedTab === '2' })} onClick={() => { this.toggle('2'); }}>Planos Odontológicos</NavLink>
                        </NavItem>
                        <NavItem className="shadow-lg">
                          <NavLink className={`border-50 `+ classnames({ active: this.state.SelectedTab === '3' })} onClick={() => { this.toggle('3'); }}>Seguros de Vida</NavLink>
                        </NavItem>
                       
                      </Nav>
              {/* <div className="tab-content mt-8" id="nav-tabContent"> */}
              <TabContent activeTab={this.state.SelectedTab} className="mt-8">
                {/* <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="nav-tab-1"> */}
                <TabPane tabId="1" className="fade show" active>
                  <div className="row align-items-center justify-content-between mb-10">
                    <div className="col-12 col-lg-6 mb-6 mb-lg-0">
                      <img src={require(`../../assets/images/hero/Prancheta 14.png`)} alt="Image" className="img-fluid" />
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5">
                      <div>
                        <h4 className="mt-3">Planos Médicos</h4>
                        <p className="lead">Seguros e planos de saúde empresárias</p>
                        <p className="mb-0">Sua saúde, de seus familiares ou funcionários devem ser levadas a sério, portanto atuamos com as melhores companhias para que assim possamos atender aos diversos perfis de utilização dos planos regionais a planos com coberturas internacionais.</p>
                        <Link className="btn1" to="/contato">Saiba mais</Link>
                       
                      </div>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="2" className="fade show" active >
                  <div className="row align-items-center justify-content-between mb-10">
                    <div className="col-12 col-lg-6 mb-6 mb-lg-0">
                      <img src={require(`../../assets/images/hero/Prancheta2.png`)} alt="Image" className="img-fluid" />
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5">
                      <div>
                        <h4 className="mt-3">Planos Odontológicos</h4>
                        <p className="mb-0">A saúde começa pela boca! Portanto temos as melhores opções das maiores companhias em planos odontológicos para ninguém parar de sorrir! Temos desde planos com coberturas básicas a planos com atendimento estético.</p>
                        <Link className="btn1" to="/contato">Saiba mais</Link>
                      </div>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="3" className="fade show" active >
                  <div className="row align-items-center justify-content-between mb-10">
                    <div className="col-12 col-lg-6 mb-6 mb-lg-0">
                      <img src={require(`../../assets/images/hero/Prancheta3.png`)} alt="Image" className="img-fluid" />
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5">
                      <div>
                        <h4 className="mt-3">Seguros de Vida</h4>
                        <p className="mb-0">Proteger a quem você ama a todo tempo, isso importa! Desde proteção financeira em vida a planejamento e sucessão patrimonial, nós temos diversas opções para você seguir traçando seus planos e não se preocupar com percalços.</p>
                        <Link className="btn1" to="/contato">Saiba mais</Link>
                      </div>
                    </div>
                  </div>
                </TabPane>
                
              </TabContent>
            </div>
          </div>
      
        );
    }
}

export default Worktab;