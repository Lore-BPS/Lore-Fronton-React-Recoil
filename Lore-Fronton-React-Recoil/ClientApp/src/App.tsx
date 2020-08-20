import React, { Component } from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';
import Designer from './components/Designer'
import Dashboard from './components/Dashboard'
import Admin from './components/Admin'
import Tools from './components/Tools'
import Processes from './components/Processes'

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/Admin' component={Admin} />
            <Route exact path='/Tools' component={Tools} />
            <Route exact path='/Processes' component={Processes} />

            <Route exact path='/Designer' component={Designer} />
        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
      </Layout>
    );
  }
}
