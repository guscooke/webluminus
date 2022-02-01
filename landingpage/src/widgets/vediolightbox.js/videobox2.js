/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Tilt from 'react-parallax-tilt';
import ModalVideo from 'react-modal-video'
import { Spinner, Button } from 'reactstrap';

class Videobox2 extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
 
    openModal() {
        this.setState({ isOpen: true })
    }
    render() {
        return (
        
                <div className="row justify-content-center">
                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} autoplay={true} videoId='P_wKDMcr1Tg' onClose={() => this.setState({ isOpen: false })} />
                         
                    <div className="col-12 col-lg-6">
                        <div>
                            {/* Image */}
                            
                            <h1 className="display-6 mt-5 font-w-5">
                            Quer saber<strong className="text-orange"> mais?</strong> Nós te explicamos
                                </h1>
                                <Tilt perspective="5000" transitionSpeed="3000">    
                            <img src={require(`../../assets/images/videofaq.png`)} className="img-fluid" alt="..." />
                            </Tilt>
                            
                            <div className="video-btn video-btn-pos"> 
                                <a className="play-btn popup-youtube" onClick={this.openModal} ><i className="la la-play" /></a>
                                <div className="spinner-eff">
                                    <div className="spinner-circle circle-1" />
                                    <div className="spinner-circle circle-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
         
     
        );
    }
}

export default Videobox2;