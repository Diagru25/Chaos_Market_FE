import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Header from '@src/components/header/Header';
import Footer from '@src/components/footer/Footer';

import { ClientRoutes } from '@src/routes';

const ClientSite = ({ path }) => {
    return (
        <Route path={path}>
            <div>
                <Header />
                <Switch>
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
                </Switch>
                <Footer />
            </div>
        </Route>
    );
};

export default ClientSite;
