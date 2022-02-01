import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FeatureServices extends Component {
    render() {
        return ( 
            <div className="row align-items-center">
              
                <div className="col-xl-4 col-lg-4 mb-8 mb-lg-0">
                    <div className={`px-4 py-7 rounded hover-translate text-center ${this.props.bgshadow}`}>
                        <div>
                            <img className="img-fluid" src={require(`../../assets/images/prancha2.png`)} alt="" />
                        </div>
                        {/* <h5 className="mt-4 mb-3">Creative UI/UX 1</h5> */}
                        <p>Através de seu acesso no portal cadastre suas indicações. Quanto mais indicar mais pode ganhar!</p>
                        {/* <Link  to="#" className="btn-link">Read Details</Link> */}
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-sm-6">
                    <div className={`px-4 py-7 rounded hover-translate text-center bg-white shadow`}>
                        <div>
                            <img className="img-fluid" src={require(`../../assets/images/prancha3.png`)} alt="" />
                        </div>
                        {/* <h5 className="mt-4 mb-3">Flexibility</h5> */}
                        <p>Acompanhe tudo que é falado com suas indicações em tempo real. Transparência e qualidade</p>
                        {/* <Link  to="#" className="btn-link">Read Details</Link> */}
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-sm-6 mt-6 mt-sm-0">
                    <div className={`px-4 py-7 rounded hover-translate text-center ${this.props.bgshadow}`}>
                        <div>
                            <img className="img-fluid" src={require(`../../assets/images/prancha4.png`)} alt="" />
                        </div>
                        {/* <h5 className="mt-4 mb-3">Easy Code</h5> */}
                        <p>Quando sua indicação tiver a nova apólice conosco você ganhará até 20% sobre a primeiram ensalidade</p>
                        {/* <Link to="#" className="btn-link">Read Details</Link> */}
                    </div>
                    
                </div>
             
            </div>


        );
    }
}

export default FeatureServices;