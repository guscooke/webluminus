/* eslint-disable no-useless-constructor */
import React, { Component, Fragment } from 'react';
import { HashRouter, Switch, Route ,withRouter} from 'react-router-dom';
import Header3 from './layout/header/header3';
import Footer from './layout/footer/footer';

import $ from 'jquery';

import './App.css';
import './Vendor.js';
import Aboutus2 from './pages/company/aboutus2';
import Aboutus from './pages/company/aboutus';
import Faq from './pages/faq';
import Contact1 from './pages/contacts/contact1';
import SignIn1 from './pages/account/signin/signin1';
import SignIn2 from './pages/account/signin/signin2';
import ForgotPassword from './pages/account/forgotpassword';
import SignUp from './pages/account/signup';
import Portfoliolist from './pages/portfolio/portfoliolist';
import Portfoliosingle from './pages/portfolio/portfoliosingle';
import  {getProducts} from './actions';
import { connect } from 'react-redux';
import Index2 from './pages/Index/index2';
import Scrolltop from './layout/back-to-top';
import CareerSingle from './pages/company/careersingle';
import ComingSoon from './pages/utilities/comingsoon';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  UNSAFE_componentWillMount()
  {
    this.props.getProducts();
  }
  getUrl(pathname) {
    let pathArray = pathname.split('/');
    return `/${pathArray[1]}` === '/coming-soon' ? true : `/${pathArray[1]}` === '/maintenance' ? true : `/${pathArray[1]}` === '/page-not-found' ? true : false;
  }
  setHeader(pathname) {
    let pathArray = pathname.split('/');
    return `/${pathArray[1]}` === '/index2' ? true : `/${pathArray[1]}` 
 
  }
  render() {
    const { location } = this.props;
    return (
      <Fragment>
         {
           
             this.getUrl(location.pathname) ?
                <Switch>
                    <Route path="/comingsoon" component={ComingSoon} />
                    <Route path="/maintenance" component={Maintenance} />
                    <Route path="/page-not-found" component={PageNotFound} />
                    
                </Switch>
              :
            <div className="page-wrapper">
            <Header3 />
            <Switch>
            <Route exact path="/" component={Index2} />
            {/* {/<Route exact path="/index2" component={Index2}>/} */}
           
            <Route path="/trabalhe-conosco" component={CareerSingle} />
            {/* Company Pages */}
            <Route path="/quemsomos" component={Aboutus} /> 

            <Route path="/depoimentos" component={Aboutus2} /> 

            <Route path="/parceiros" component={Faq} />
            {/* <Route path="/blog" component={ComingSoon} />  */}
           
            {/* Contact Pages */}
            <Route path="/contato" component={Contact1} />
            {/* <Route path="/contact-us-1" component={Contact2} /> */}

            {/* Portfolio Pages */}
            <Route path="/hospitais-operadoras" component={Portfoliolist} />
            <Route path={`/unidade/:category/:id`} component={Portfoliosingle} /> 
            
            {/* Account Pages */}
            <Route path="/sign-in" component={SignIn1} />
            <Route path="/sign-in-1" component={SignIn2} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/forgot-password" component={ForgotPassword} />

          </Switch>
          <Footer />
          <Scrolltop />
        </div>
         }
      </Fragment>
    );
  }
}

const AppMapStateToProps = state => {
  return {
    products: state.data.products
  };
};

const AppMapDispatchToProps = dispatch => {
  return {
    getProducts: () => {
      dispatch(getProducts());
    }
  };
};


export default connect(AppMapStateToProps,AppMapDispatchToProps)(withRouter(App))

