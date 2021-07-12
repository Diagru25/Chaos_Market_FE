// @flow 
import React from 'react';

import {Switch, Route, Redirect} from 'react-router-dom';
import routerLinks from '../../consts/routes.constants';
import Header from '../../conponents/Header/Header';
import HomePage from '../../pages/home_page/HomePage';

import './ClientSite.css'

const ClientSite = ({path}) => {
    return (
        <Route path={path + ''}>
            <Switch>
                <Route path={path}>
                    <Header/>
                    <div>
                        <Switch>
                            <Route
                                exact
                                path={routerLinks.PRODUCT_DETAIL}
                                component={() => (<div>product detail</div>)}
                            />
                            <Route
                                path={routerLinks.HOME}
                                component={HomePage}
                            />
                        </Switch>
                    </div>
                </Route>
            </Switch>
        </Route>
    );
};

export default ClientSite;