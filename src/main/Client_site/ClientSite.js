import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Header from '@src/components/header/Header';

import { ClientRoutes } from '../../routes';

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
            </div>
        </Route>
    );
};

export default ClientSite;
