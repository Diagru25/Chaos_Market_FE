// @flow
import * as React from 'react';
import { store, history } from '../redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import AdminSite from './admin_site/AdminSite';
import ClientSite from './client_site/ClientSite';

class Loading extends React.Component {
  render() {
    return <div>Loading....</div>;
  }
}

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



a {
  text-decoration: none;
}
#root {
  height: 100%;
}
`;

export default App;
