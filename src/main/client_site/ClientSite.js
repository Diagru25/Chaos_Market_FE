import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Header from '@src/components/header/Header';
import Footer from '@src/components/footer/Footer';

import { ClientRoutes } from '@src/routes';
import { clientPaths } from '@src/routes/routes.constant';

import ClientLayoutAuth from './ClientLayoutAuth';
import ClientProfileLayout from './ClientProfileLayout';
import ClientCartLayout from './ClientCartLayout';

const ClientSite = ({ path }) => {
    return (
        <Route path={path}>
            <Switch>
                <ClientLayoutAuth path={clientPaths.AUTH} />
                <ClientProfileLayout path={clientPaths.PROFILE} />
                <ClientCartLayout path={clientPaths.CART} />
                <Route>
                    <div>
                        <Header />
                        <Switch>
                            {
                                ClientRoutes.map(
                                    (route, index) => <Route
                                        key={index}
                                        exact={route.exact}
                                        path={route.path}
                                        component={route.component} />
                                )
                            }
                        </Switch>
                        <Footer />
                    </div>
                </Route>
            </Switch>
        </Route>
    );
};

export default ClientSite;
