import React from 'react';

import { Switch, Route } from 'react-router-dom';
import routerLinks from '@src/constant/routes.constants';
import HomePage from '@src/pages/home_page/HomePage';
import Header from '@src/components/header/Header';

const ClientSite = ({ path }) => {
  return (
    <Route path={path + ''}>
      <Switch>
        <Route path={path}>
          <Header />
          <div>
            <Switch>
              <Route
                exact
                path={routerLinks.PRODUCT_DETAIL}
                component={() => <div>product detail</div>}
              />
              <Route path={routerLinks.HOME} component={HomePage} />
            </Switch>
          </div>
        </Route>
      </Switch>
    </Route>
  );
};

export default ClientSite;
