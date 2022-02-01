import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row} from 'reactstrap';

import Cta from '../../widgets/form/form';

export default function footer () {
    
        return (
            <footer className="py-11 bg-orange position-relative">
                <div className="shape-1" style={{height: '150px', overflow: 'hidden'}}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
                <path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{stroke: 'none', fill: '#fff'}} />
                </svg>
                </div>
                    <Container  className=" mt-11">
                    <Row>
                        <Cta />
                    <div className="col-12 col-lg-6 col-xl-7"> 
                    <Row>
                        <Col className="col-12 col-sm-4 navbar-dark">
                        <h5 className="mb-4 text-white">Paginas</h5>
                        <ul className="navbar-nav list-unstyled mb-0">
                           
                            <li className="mb-3 nav-item"><Link className="nav-link" to="/quemsomos">Quem Somos</Link> 
                            </li>
                            <li className="mb-3 nav-item"><Link className="nav-link" to="/hospitais-operadoras">Hospitais & Operadoras</Link> 
                            </li>
                            {/* <li className="mb-3 nav-item"><Link className="nav-link" to="/depoimentos">Depoimentos</Link> 
                            </li> */}
                            
                            <li className="mb-3 nav-item"><Link className="nav-link" to="/trabalhe-conosco">Trabalhe Conosco</Link> 
                            </li>
                            <li className="mb-3 nav-item"><Link className="nav-link" to="/faq">Programa Afiliados</Link> 
                            </li>
                            {/* <li className="mb-3 nav-item"><Link className="nav-link" to="/blog">Blog</Link> 
                            </li> */}
                            <li className="mb-3 nav-item"><Link className="nav-link" to="/contato">Contato</Link> 
                                                        </li>
                            
                        </ul>
                        </Col> 
                         
                   
                     <Col className="col-12 col-sm-6 mt-6 mt-sm-0">
                     <h5 className="mb-4 text-white">Sobre</h5>
                     <Link className="footer-logo text-white h2 mb-0" to="/quemsomos">
                            {/* <img src={require(`../../assets/images/hero/luminusbranca.png`)}width="370px" alt="Image" className="img-fluid" /> */}
                            <h6>A Luminus Seguros é uma empresa com mais de 16 anos de experiência e especializada em consultoria de seguros e benefícios para empresas de todos os portes, indivíduos e famílias.</h6>
                            {/* <h6>Luminus Assessoria e Corretora de Seguros e Planos de Saúde Ltda cnpj:37.920.617/0001-35</h6> */}
                            <img src={require(`../../assets/images/hero/luminusbranca.png`)}width="270px" alt="Image" className="img-fluid" />
                            </Link> 
                        </Col>
                    </Row>
                    <Row className="mt-5" >  
                   
                     {/* <h5 className="mb-4 text-white">Sobre</h5> */}
                  
                       
                    </Row>

                    </div>
                </Row>
                <Row className="text-white text-center mt-8">
                    <Col> <hr className="mb-8"/> Luminus Assessoria e Corretora de Seguros e Planos de Saúde Ltda | Cnpj:37.920.617/0001-35 | <u><Link className="text-white" to="#">Design by Builder</Link></u> | Todos os direitos reservados.</Col>
                </Row>
                </Container>
            </footer>
        )
                    };

