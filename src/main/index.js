// @flow
import * as React from 'react';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import AdminSite from '@src/main/admin_site/AdminSite';
import ClientSite from '@src/main/client_site/ClientSite';
import Loading from '@src/components/loading/Loading';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Provider store={store}>
                <Router>
                    <React.Suspense fallback={<Loading />}>
                        <Switch>
                            <AdminSite path="/admin" />
                            <ClientSite path="/" />
                            <Redirect to="" />
                        </Switch>
                    </React.Suspense>
                </Router>
            </Provider>
        </>
    );
};

const GlobalStyle = createGlobalStyle`
html,
body {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;

    background-color: #f0f2f5;
}

div,
h1,
a,
p,
ul,
span {
  line-height: normal;
  padding: 0;
  margin: 0;
}

input {
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
}

button {
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
}

svg {
    padding: 0px 5px;
    font-size: 1.3rem;
}

a {
  text-decoration: none;
}
#root {
  height: 100%;
}
`;

export default App;
