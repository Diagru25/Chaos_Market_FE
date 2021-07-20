import React from 'react';

import { Switch, Route } from 'react-router-dom';
import routerLinks from '@src/constant/routes.constants';
import HomePage from '@src/pages/home_page/HomePage';
import Header from '@src/components/header/Header';

const ClientSite = ({ path }) => {
    return (
        <Route path={path}>
            <Switch>
                <div>
                    <Header />
                    <Switch>
                        <Route
                                exact
                                path={routerLinks.PRODUCT_DETAIL}
                                component={() => <div>product detail</div>}
                            />
                        <Route
                            exact
                            path={routerLinks.CATEGORIES}
                            component={() => <h1>CATEGORIES</h1>}
                        />
                        <Route exact path={routerLinks.HOME} component={HomePage} />
                    </Switch>
                </div>
            </Switch>
        </Route>

    );
};

export default ClientSite;
