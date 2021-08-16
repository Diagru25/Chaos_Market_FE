import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Header from '@src/components/header/Header';
import Footer from '@src/components/footer/Footer';

import { ClientRoutes } from '@src/routes';
import { clientPaths } from '@src/routes/routes.constant';

import CartPage from '@src/pages/cart_page/CartPage';

import LoginRequired from '@src/components/login_required/LoginRequired';
import ClientLayoutAuth from './ClientLayoutAuth';
import ClientProfileLayout from './ClientProfileLayout';

const ClientSite = ({ path }) => {
    return (
        <Route path={path}>
            <Switch>
                <ClientLayoutAuth path={clientPaths.AUTH} />
                <ClientProfileLayout path={clientPaths.PROFILE} />
                <LoginRequired
                    exact
                    path={clientPaths.CART}
                    component={CartPage}
                    redirectLink={clientPaths.AUTH_LOGIN}
                />
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
