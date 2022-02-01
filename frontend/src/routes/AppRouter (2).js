import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import LoginLayout from "../layouts/LoginLayout";
import LoginPage from "../pages/LoginPage";
import ExpeditePage from "../pages/expedite/ExpeditePage";
import MasterDockPage from "../pages/expedite/MasterDockPage";
import CrudSamplePage from "../pages/CrudSamplePage";
import { Helmet } from 'react-helmet';
import styles from "./index.less";

// routes should look somewhat like this
// /<app>/<routine>/<id>/

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact={true}>
        <DefaultLayout>
          <Helmet><title>syncreon Customer Portal</title></Helmet>
          <div className={styles.mainContainer}>
            <h1>Dashboard</h1>
          </div>
        </DefaultLayout>
      </Route>
      <Route path="/expedite" exact={true}>
      <Helmet><title>syncreon - Expedite</title></Helmet>
        <DefaultLayout>
          <ExpeditePage />
        </DefaultLayout>
      </Route>
      <Route path="/expedite/dock">
      <Helmet><title>syncreon - Expedite: Dock</title></Helmet>
        <DefaultLayout>
          <MasterDockPage />
        </DefaultLayout>
      </Route>
      <Route path="/crudSample">
      <Helmet><title>syncreon - CRUD Sample</title></Helmet>
        <DefaultLayout>
          <CrudSamplePage />
        </DefaultLayout>
      </Route>
      <Route path="/login">
        <LoginLayout>
          <LoginPage />
        </LoginLayout>
      </Route>
      <Route>
      <Helmet><title>syncreon - Not Found</title></Helmet>
        <h1>404</h1>
      </Route>
    </Switch>
  </Router>
);
