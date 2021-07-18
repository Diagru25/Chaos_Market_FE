// @flow
import * as React from 'react'
import { store, history } from '../redux/store'
import { Provider } from 'react-redux'
import { Router, Switch, Redirect } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import AdminSite from './admin_site/AdminSite'
import ClientSite from './client_site/ClientSite'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <AdminSite path='/admin' />
            <ClientSite path='' />
            <Redirect to='' />
          </Switch>
        </Router>
      </Provider>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
html,
body {
  height: 100%;
  margin: 0px;
  padding: 0px;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
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
`

export default App
