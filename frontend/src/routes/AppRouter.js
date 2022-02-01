import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import LoginLayout from "../layouts/LoginLayout";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import AdminPage from "../pages/AdminPage";
import AfiliadoPage from "../pages/AfiliadoPage";
import LeadPage from "../pages/LeadPage";
import PagamentoPage from "../pages/PagamentoPage";
import RelatorioLead from "../pages/RelatorioLead";
import RelatorioPagamento from "../pages/RelatorioPagamento";
import styles from "./index.less";
import { connect } from "react-redux";
import PrivateComponent from "./PrivateComponent";

// routes should look somewhat like this
// /<app>/<routine>/<id>/

const Routes = (props) => {
  console.log(props);

  if(props.auth_jwt.afiliado_id != null && props.auth_jwt.afiliado_id > 0){
    return (
      <Router>
        <Switch>
          
          <Route path="/" exact={true}>
            <PrivateComponent path="/" title="Dashboard">
              <HomePage />
            </PrivateComponent>
          </Route>
          <Route path="/lead">
            <PrivateComponent path="/lead" title="Lead">
              <LeadPage />
            </PrivateComponent>
          </Route>
         <Route path="/relatorio_leads">
            <PrivateComponent path="/relatorio_leads" title="Relatorio - Leads">
              <RelatorioLead />
            </PrivateComponent>
          </Route>
         <Route path="/relatorio_pagamentos">
            <PrivateComponent path="/relatorio_pagamentos" title="Relatorio - Pagamentos">
              <RelatorioPagamento />
            </PrivateComponent>
          </Route>
          <Route path="/login">
            <LoginLayout>
              <LoginPage />
            </LoginLayout>
          </Route>
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
      </Router>
    );
  }else{
    return (
      <Router>
        <Switch>
          
          <Route path="/" exact={true}>
            <PrivateComponent path="/" title="Dashboard">
              <HomePage />
            </PrivateComponent>
          </Route>
          <Route path="/usuarios">
            <PrivateComponent path="/usuarios" title="Usuarios">
              <AdminPage />
            </PrivateComponent>
          </Route>
          <Route path="/afiliado">
            <PrivateComponent path="/afiliado" title="Afiliado">
              <AfiliadoPage />
            </PrivateComponent>
          </Route>    
         <Route path="/pagamento">
            <PrivateComponent path="/pagamento" title="Pagamento">
              <PagamentoPage />
            </PrivateComponent>
          </Route>
          

          <Route path="/lead">
            <PrivateComponent path="/lead" title="Lead">
              <LeadPage />
            </PrivateComponent>
          </Route>
         <Route path="/relatorio_leads">
            <PrivateComponent path="/relatorio_leads" title="Relatorio - Leads">
              <RelatorioLead />
            </PrivateComponent>
          </Route>
         <Route path="/relatorio_pagamentos">
            <PrivateComponent path="/relatorio_pagamentos" title="Relatorio - Pagamentos">
              <RelatorioPagamento />
            </PrivateComponent>
          </Route>
          <Route path="/login">
            <LoginLayout>
              <LoginPage />
            </LoginLayout>
          </Route>
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
      </Router>
    );
  }
  
};
  

const mapStateToProps = (state) => {  
  return {    
    auth_jwt: state.userReducer,
  };
};

export default connect(mapStateToProps)(Routes);
