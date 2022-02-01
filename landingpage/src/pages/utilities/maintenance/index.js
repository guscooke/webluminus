import React, { Component } from 'react';

class Maintenance extends Component {
    constructor(props) {
        super(props)
      }
      componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <div className="page-content">
                {/*404 start*/}
                <section className="fullscreen-banner p-0 bg-primary overflow-hidden">
                    <div className="container-fluid pl-0 h-100">
                        <div className="row h-100">
                            <div className="col-md-7 h-100 d-flex align-items-center">
                                <img className="img-fluid d-inline" src={require(`../../../assets/images/maintenance.png`)} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                {/*404 end*/}
            </div>
        );
    }
}

export default Maintenance;