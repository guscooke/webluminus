import React, { Component } from 'react';
import CommingSoonCounter from '../../../widgets/common/counter';

class ComingSoon extends Component {
    constructor(props) {
        super(props)
      }
      componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <div className="page-content">
                {/*coming soon start*/}
                <section className="fullscreen-banner p-0 o-hidden bg-pos-r" data-bg-img={require(`../../../assets/images/coming-bg.png`)} style={{height: '341px', backgroundImage: `url(${require('../../../assets/images/coming-bg.png')}`}}>
                    <div className="container-fluid px-md-8 h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-12">
                                <div className="shadow p-5 rounded" data-bg-color="rgba(255,255,255,0.2)">
                                    <div className="row justify-content-between">
                                        <div className="col-lg-5 col-md-12">
                                            <div className="coming-soon">
                                                <h1 className="mt-4 mb-2 font-w-7">Coming Soon</h1>
                                                <p>We Are Creatinig Something Awesome And Exciting For You</p>
                                                <ul className="countdown list-inline d-flex justify-content-between" data-countdown="2020/03/23" />
                                                <CommingSoonCounter  time={'100150'} />
                                                <div>
                                                    <h4 className="title z-index-1 mb-4">Subscribe to get notified!</h4>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="subscribe-form">
                                                                <form id="mc-form" className="group">
                                                                    <input defaultValue name="EMAIL" className="email form-control" id="mc-email" placeholder="Email Address" required style={{ height: '60px' }} type="email" />
                                                                    <input className="btn btn-primary btn-block mt-3 mb-2" name="subscribe" defaultValue="Subscribe" type="submit" />
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 md-mt-5 text-lg-right">
                                            <img className="img-fluid d-inline" src={require(`../../../assets/images/coming-soon-img.png`)} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*coming soon end*/}
            </div>

        );
    }
}

export default ComingSoon;