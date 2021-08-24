import React from 'react';
import styled from 'styled-components';
import Header from '@src/components/header/Header';
import Footer from '@src/components/footer/Footer';
import LoginRequired from '@src/components/login_required/LoginRequired';
import { clientPaths } from '@src/routes/routes.constant';
import { Route, Switch } from 'react-router-dom';

const CartPage = React.lazy(() => import('@src/pages/cart_page/CartPage'));

const ClientCartLayout = () => {
    return (
        <Route path={clientPaths.CART}>
            <div>
                <Header/>
                <Container>
                    <Switch>
                        <LoginRequired
                            path = {clientPaths.CART_DETAIL}
                            component = {CartPage}
                            redirectLink = {clientPaths.AUTH_LOGIN}
                        />
                    </Switch>
                </Container>
                <Footer/>
            </div>
        </Route>
    )
}

const Container = styled.div`
`;

export default ClientCartLayout;