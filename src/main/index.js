// @flow
import * as React from 'react'
import { store, history } from '../redux/store'
import { Provider } from 'react-redux'
import { Router, Switch, Redirect } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import AdminSite from './Admin_site/AdminSite'
import ClientSite from './Client_site/ClientSite'

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router history={history}>
        <Switch>
          <AdminSite path='/admin' />
          <ClientSite path='' />
          <Redirect to='' />
        </Switch>
      </Router>
    </Provider>
  )
}

const GlobalStyle = createGlobalStyle`
  html,body { 
    height: 100%; 
    margin: 0px; 
    padding: 0px; 
  }
  div, a, p, span {
    font-family: 'Krub', sans-serif;
    line-height: normal;
  }
  a {
    text-decoration: none;
  }
  #root {
    height: 100%;
  }
`

export default App
