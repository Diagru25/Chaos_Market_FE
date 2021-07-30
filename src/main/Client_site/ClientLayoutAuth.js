import React from 'react';
import { Route, Switch } from 'react-router';

import styled from 'styled-components';
import LoginPage from '@src/pages/login_page/LoginPage';
import { clientPaths } from '@src/routes/routes.constant';
import Footer from '@src/components/footer/Footer';
import Link from '@src/components/packages/base/Link';

const ClientLayoutAuth = ({ path }) => {
    return (
        <Route path={path}>
            <Wrapper>
                <HeaderBox>
                    <HeaderContent>
                        <Link to={clientPaths.HOME}>
                            <LogoBox>
                                <Logo src={require('../../assets/images/logo.svg').default} />
                                <LogoName>CHAOS MARKET</LogoName>
                            </LogoBox>
                        </Link>
                        <HeaderText>
                            Do you need support?
                        </HeaderText>
                    </HeaderContent>
                </HeaderBox>
                <Switch>
                    <Route
                        path={clientPaths.AUTH_LOGIN}
                        component={LoginPage}
                    />
                    <Route
                        path={clientPaths.AUTH_REGISTER}
                        component={() => <div>Register</div>}
                    />
                    <Route
                        path={clientPaths.AUTH_FORGOT_PASSWORD}
                        component={() => <div>Forgot password</div>}
                    />
                </Switch>
                <Footer />
            </Wrapper>
        </Route>
    )
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    height: 100%;
    background-color: #fff;

`;

const HeaderBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background: #fff;
`;

const HeaderContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 20px 150px;
`;

const LogoBox = styled.div`
    display: flex;
`;

const Logo = styled.img`
    height: 40px;
    width: 40px;
    min-width: 40px;
    cursor: pointer;
`;

const LogoName = styled.span`
    font-size: 20px;
    font-weight: 900;

    padding: 5px;
    color: #2196f3;

    display: flex;
    align-items: center;
`;

const HeaderText = styled.span`
    color: #2196f3;
    align-items: center;
`;

export default ClientLayoutAuth;