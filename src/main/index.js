// @flow 
import * as React from 'react';
import {store, history} from '../redux/store';
import { Provider } from 'react-redux';
import { Router, Switch, Redirect } from 'react-router-dom';

import AdminSite from './Admin_site/AdminSite';
import ClientSite from './Client_site/ClientSite';

const App = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <AdminSite path='/admin'/>
                    <ClientSite path=''/>
                    <Redirect to=''/>
                </Switch>
            </Router>
        </Provider>
    );
};

export default App;