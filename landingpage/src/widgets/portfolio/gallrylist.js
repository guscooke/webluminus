import React, { Component } from 'react';
import Portfolio from '../../api/portfolio.js';
import Lightbox from 'react-modal-image';
import Pagination from '../Pagination.js';
import { Link } from 'react-router-dom';

class Gallrylist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PortfolioList: Portfolio,
            uniqueCategory: [],
            PortfolioDisplay: Portfolio,
            listProject:[],
            currentPage: 1,
            isOpen:false
        }
        this.HeandleLightbox=this.HeandleLightbox.bind(this);
        this.onPageChanged=this.onPageChanged.bind(this);
    }
    componentDidMount() {
        let unique = [];
        this.state.PortfolioList.map((gallary, index) => {
            if (gallary.category) {
                gallary.category.map((cat) => {
                    if (unique.indexOf(cat) === -1) {
                        unique.push(cat);
                    }
                })
            }
        })
        this.setState({
            ...this.state,
            uniqueCategory: unique
        })
    }
    HeandleLightbox() 
    {
        this.setState({ 
                ...this.state,
                isOpen: !this.state.isOpen 
        });
    };
    onCategortClick(cate) {
        var removeelems = document.getElementsByClassName("portfolio-set");
        [].forEach.call(removeelems, function (el) {
            el.classList.remove('is-checked');
        });
        this.setState({
            currentPage:1
        })
        if (cate === "all") {
            var curr_products = this.state.PortfolioList.slice((this.state.currentPage - 1) * 6, ((this.state.currentPage - 1) * 6) + 6);
            this.setState({
                ...this.state,
                PortfolioDisplay: curr_products,
                listProject:this.state.PortfolioList
            })
            document.querySelector(".all").classList.add("is-checked");
        }
        else {
            let CatgoryValue = this.state.PortfolioList.filter((portfolio) => {
                let categoryMatch;
                if (portfolio.category)
                    categoryMatch = portfolio.category.some(category => cate.includes(category))
                else
                    categoryMatch = true
                return (categoryMatch)
            })

            var curr_products_category = CatgoryValue.slice((this.state.currentPage - 1) * 6, ((this.state.currentPage - 1) * 6) + 6);
            this.setState({
                ...this.state,
                PortfolioDisplay: curr_products_category,
                listProject:CatgoryValue
            })
            document.querySelector("."+cate).classList.add("is-checked");
        }
    }
    onPageChanged(data) {
        var {PortfolioList,PortfolioDisplay } = this.state;
        var { currentPage, totalPages, pageLimit } = data;
       
        var offset = (currentPage - 1) * pageLimit;
        var current = PortfolioList.slice(offset, offset + pageLimit);
        this.setState({
            ...this.state,
            currentPage: currentPage,
            PortfolioDisplay: current,
            listProject:PortfolioList,
            totalPages: totalPages
        });
    }
    render() {
        // eslint-disable-next-line no-unused-vars
        const { PortfolioList, uniqueCategory,totalPagesdata,listProject, PortfolioDisplay,CurrentPortfolio } = this.state;
        
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            {this.state.uniqueCategory.length > 0 ?
                                <div className="portfolio-filter">
                                    <button data-filter className="portfolio-set all is-checked mb-3 mb-sm-0" value="all" onClick={(e) => { this.onCategortClick('all') }} >Todos</button>
                                    {this.state.uniqueCategory.map((category, index) =>
                                        <button data-filter=".cat1" className={"portfolio-set mb-3 mb-sm-0 " + category} value={category} onClick={(e) => { this.onCategortClick(category) }} >{category}</button>
                                    )}

                                </div>
                                :
                                null
                            }

                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            {this.state.PortfolioDisplay.length > 0 ?
                                <div className="grid columns-3 row popup-gallery">
                                    <div className="grid-sizer" />
                                    {this.state.PortfolioDisplay.map((port, index) =>
                                        <div className="grid-item col-lg-4 col-md-6 mb-5 cat3">
                                            <div className="portfolio-item position-relative overflow-hidden">
                                                <Lightbox
                                                    className="img-center w-100"
                                                    small={require(`../../assets/images/portfolio/${port.images}`)}
                                                    medium={require(`../../assets/images/portfolio/large/${port.images}`)}
                                                    alt={port.category}
                                                    onClose={this.HeandleLightbox}
                                                />
                                                <div className="portfolio-title d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <small className="text-light mb-2">
                                                            {port.category ?
                                                                <span>
                                                                    {port.category.map((category, i, arr) =>
                                                                        <span style={{ color: 'white' }}>  {i !== (arr.length - 1) ? '|' : ''} </span>
                                                                    )}
                                                                </span>
                                                                :
                                                                null
                                                            }
                                                        </small>
                                                        <h6><Link to={`/unidade/${port.category[0]}/${port.id}`}  className="btn-link text-white" >{port.name}</Link></h6>
                                                    </div>
                                                    <Link to={`/unidade/${port.category[0]}/${port.id}`}  className="popup-img h2 text-white"> <i className="la la-plus" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                :
                                <div className="grid columns-3 row popup-gallery">
                                    <p>Procure outros Hospitais e Operadoras</p>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="row justify-content-center">
                            {this.state.listProject.length > 6 ?
                                    <div>
                                        <Pagination
                                            totalRecords={this.state.PortfolioDisplay.length}
                                            pageLimit={6}
                                            onPageChanged={this.onPageChanged}
                                        />
                                    </div> 
                                :
                                    <div style={{display:'category'}}>
                                        <Pagination
                                            totalRecords={this.state.PortfolioDisplay.length}
                                            pageLimit={6}
                                            onPageChanged={this.onPageChanged}
                                        />
                                    </div> 
                            
                            }
                            
                    </div>
                </div>
            </div>

        );
    }
}

export default Gallrylist;