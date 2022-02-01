import React, { Component } from 'react';
import Portfolio from '../../api/portfolio.js';
import Lightbox from 'react-modal-image';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import Pageheading from '../../widgets/Pageheading.js';
window.fn = OwlCarousel;


class Portfoliosingle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Portfolioid: parseInt(this.props.match.params.id),
            PortfolioCategory: this.props.match.params.category,
            PortfolioList: Portfolio,
            Related: null,
            isLoaded: false,
            CurrentPortfolio: null
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0)
        let CurrentPortfolioid = this.state.Portfolioid;
        let PortfolioData = this.state.PortfolioList;
        let RelatedPortfolio = [];
        if (PortfolioData && PortfolioData.length > 0) {
            PortfolioData.map((portfolio) => {
                if (portfolio.id === CurrentPortfolioid) {
                    PortfolioData.map((gallary, index) => {
                        if (gallary.category) {
                            gallary.category.map((cat) => {
                                if (cat == this.state.PortfolioCategory) {
                                    RelatedPortfolio.push(gallary)
                                }

                            })

                        }
                    })
                    this.setState({
                        ...this.state,
                        CurrentPortfolio: portfolio,
                        Related: RelatedPortfolio,
                        isLoaded:true
                    })
                }
            })
        }
    }
    fetchData(){
       window.location.reload(false);
    }
    render() {
        const { CurrentPortfolio, Related,isLoaded ,PortfolioCategory} = this.state;
        return (
            <div>
               
                <section className="position-relative">
                    <Pageheading foldername={"Portfolio"} title={PortfolioCategory} />
                </section>
                {isLoaded ?
                <div className="page-content">

                    <section>
                         {(CurrentPortfolio != null )? 
                        <div className="container">
                                <div className="row">
                                    <div className="col-lg-7 col-12">
                                        {/* <OwlCarousel
                                            className="owl-carousel"
                                            items={1}
                                            autoplay={true}
                                        > */}
                                            <div className="item">
                                                <img className="img-fluid w-100" src={require(`../../assets/images/portfolio/large/${CurrentPortfolio.images}`)} alt="" />
                                            </div>
                                            {/* <div className="item">
                                                <img className="img-fluid w-100" src={require(`../../assets/images/hero/luminus3.png`)} alt="" />
                                            </div> */}
                                        {/* </OwlCarousel> */}
                                    </div>
                                    <div className="col-lg-5 col-12">
                                        <h2 className="title">{CurrentPortfolio.name}</h2>
                                        <p className="lead mb-5">{CurrentPortfolio.description}</p>
                                        <ul className="cases-meta list-unstyled text-muted">
                                            {/* <li className="mb-3"><span className="text-dark"> Client: </span> {CurrentPortfolio.client}</li>
                                            <li className="mb-3"><span className="text-dark"> Created by: </span> {CurrentPortfolio.createdby}</li> */}
                                             <li className="mb-3"><span className="text-dark"> Categoria: </span> {PortfolioCategory}</li>
                                            {/* <li><span className="text-dark"> Project Completed: </span> {CurrentPortfolio.projectcomplated}</li> */}
                                        </ul>
                                    </div>
                                </div>

                        </div>
                        : null }
                    </section>
                    <section>
                        <div className="container">
                            <div className="row justify-content-center text-center">
                                <div className="col-lg-8 col-md-12">
                                    <div className="mb-6"> <span className="badge badge-primary-soft p-2 font-w-6">
                                        Saiba +
                        </span>
                                        <h2 className="mt-3">Hospitais e Operadoras</h2>
                                        <p>Saiba um pouco mais sobre as melhores Operadoras e Hospitais</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                {(Related != null )?  
                                  <OwlCarousel
                                        className="owl-carousel"
                                        dotData={false}
                                        items={3}
                                        autoplay={true}
                                        margin={20}
                                    > 
                                    {Related.map((related, index) => (
                                        <div className="item">

                                            <div className="portfolio-item position-relative overflow-hidden">

                                                <Lightbox
                                                    className="img-center w-100"
                                                    small={require(`../../assets/images/portfolio/${related.images}`)}
                                                    medium={require(`../../assets/images/portfolio/large/${related.images}`)}
                                                    alt={related.category}
                                                    onClose={this.HeandleLightbox}
                                                />
                                                <div className="portfolio-title d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <small className="text-light mb-2">
                                                            {related.category ?
                                                                <span>
                                                                    {related.category.map((category, i, arr) =>
                                                                        <span style={{ color: 'white' }}>{category}  {i !== (arr.length - 1) ? '|' : ''} </span>
                                                                    )}
                                                                </span>
                                                                :
                                                                null
                                                            }
                                                        </small>
                                                        <h6><a href={`/hospitais-operadoras/${related.category[0]}/${related.id}`} onClick={() => window.location.reload()}    className="btn-link text-white" >{related.name}</a></h6>
                                                    </div>
                                                    <a href={`/hospitais-operadoras/${related.category[0]}/${related.id}`} onClick={() => window.location.reload()}  className="popup-img h2 text-white"><i className="la la-plus" />
                                                    </a>

                                                </div>
                                            </div>

                                        </div>
                                    ))}

                                    </OwlCarousel>
                                    : null
                                    }
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*portfolio end*/}
                </div>
                : null
                }
            </div>
        );
    }
}

export default Portfoliosingle;