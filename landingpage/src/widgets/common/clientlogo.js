import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';  
window.fn = OwlCarousel;

class Clientlogo extends Component {
    render() {
        return (
            // <div className="owl-carousel mt-8 no-pb" data-dots="false" data-items={4} data-md-items={4} data-sm-items={3} data-xs-items={2} data-margin={30} data-autoplay="true">
              <OwlCarousel
                    className={`owl-carousel mt-${this.props.margintop}`}
                    dotData={false}
                    items={this.props.logoitems}
                    autoplay={true}
                    margin={30}
                    dots={false}
                    loop={true}
                  
                  
               
                >
                <div className="item">
                    <div className="clients-logo">
                        <img className="img-fluid" style={{width: '250px'}} src={require(`../../assets/images/client/1.svg`)} alt="" />
                    </div>
                </div>
                <div className="item">
                    <div className="clients-logo">
                        <img className="img-fluid" style={{width: '250px'}} src={require(`../../assets/images/client/2.svg`)} alt="" />
                    </div>
                </div>
                <div className="item">
                    <div className="clients-logo">
                        <img className="img-fluid" style={{width: '250px'}} src={require(`../../assets/images/client/3.svg`)} alt="" />
                    </div>
                </div>
                <div className="item">
                    <div className="clients-logo">
                        <img className="img-fluid" style={{width: '250px'}} src={require(`../../assets/images/client/4.svg`)} alt="" />
                    </div>
                </div>
                <div className="item">
                    <div className="clients-logo">
                        <img className="img-fluid" style={{width: '250px'}} src={require(`../../assets/images/client/5.png`)} alt="" />
                    </div>
                </div>
                <div className="item">
                    <div className="clients-logo">
                        <img className="img-fluid" style={{width: '250px'}} src={require(`../../assets/images/client/6.svg`)} alt="" />
                    </div>
                </div>
                <div className="item">
                    <div className="clients-logo">
                        <img className="img-fluid" style={{width: '250px'}} src={require(`../../assets/images/client/7.png`)} alt="" />
                    </div>
                </div>
                <div className="item">
                    <div className="clients-logo">
                        <img className="img-fluid" style={{width: '250px'}} src={require(`../../assets/images/client/8.svg`)} alt="" />
                    </div>
                </div>
                </OwlCarousel> 

        );
    }
}

export default Clientlogo;