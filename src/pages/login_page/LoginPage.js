
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

import Button from '@src/components/packages/base/Button';
import FocusInput from '@src/components/packages/base/FocusInput';
import Link from '@src/components/packages/base/Link';

import { IoLogInOutline, IoLogoFacebook, IoLogoApple } from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';

import authActions from '@src/redux/auth/actions';

import { clientPaths } from '@src/routes/routes.constant';

const LoginPage = () => {

    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector(state => state.authReducer)

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = () => {
        dispatch(authActions.actions.loginClient(username, password));
    }

    if (isLoggedIn) {
        return <Redirect to='/'/>
    }

    return (
        <Wrapper>
            <Content>
                <LeftPanel />
                <RightPanel>
                    <LoginContainer>
                        <LoginHeader>
                            Sign In
                        </LoginHeader>
                        <LoginContent>
                            <FormGroup>
                                <FocusInput
                                    placeholder='Email'
                                    onChange={e => setUsername(e.target.value)} />
                                <Spacer />
                            </FormGroup>
                            <FormGroup>
                                <FocusInput
                                    placeholder='Password'
                                    type='password'
                                    onChange={e => setPassword(e.target.value)}
                                />
                                <Spacer />
                            </FormGroup>
                            <FormGroup>
                                <LoginButton onClick={handleClick}>
                                    Sign In
                                    <IoLogInOutline />
                                </LoginButton>
                                <Link to={clientPaths.AUTH_FORGOT_PASSWORD}>
                                    <ForgotPassword>
                                        Forgot password
                                    </ForgotPassword>
                                </Link>
                            </FormGroup>
                            <Separate>
                                <Line />
                                <Text>OR</Text>
                                <Line />
                            </Separate>
                            <OtherLoginGroup>
                                <ButtonFacebookLogin>
                                    <IoLogoFacebook />
                                    Facebook
                                </ButtonFacebookLogin>
                                <ButtonGoogleLogin>
                                    <FcGoogle />
                                    Google
                                </ButtonGoogleLogin>
                                <ButtonAppleLogin>
                                    <IoLogoApple />
                                    Apple
                                </ButtonAppleLogin>
                            </OtherLoginGroup>
                            <Link to={clientPaths.AUTH_REGISTER}>
                                <RegisterGroup>
                                    Register now
                                </RegisterGroup>
                            </Link>
                        </LoginContent>
                    </LoginContainer>
                </RightPanel>
            </Content>
        </Wrapper>
    );

};


const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #2196f3;
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LeftPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;

const RightPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;

const LoginContainer = styled.div`
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 2px 4px #0003;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const LoginHeader = styled.div`
    font-size: 20px;
    font-weight: 600;

    padding: 22px 30px;
`;

const LoginContent = styled.div`
    padding: 0px 30px 30px 30px;
`;

const FormGroup = styled.div`
    min-width: 350px;
    margin-bottom: 10px;
`;

const Spacer = styled.div`
    padding-top: 4px;
    height: 1rem;
`;

const ForgotPassword = styled.div`
    display: inline-flex;
    padding: 5px 5px 5px 0px;
    color: #0055AA;
`;

const Separate = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    margin: 10px 0px;
`;

const Line = styled.div`
    display: flex;
    border: 1px solid #dbdbdb;
    border-bottom: none;

    flex: 1 1 0%;
`;

const Text = styled.div`
    color: #dbdbdb;
    padding: 0px 10px;
`;

const LoginButton = styled(Button)`
    width: 100%;
    background: #f9440a;
    border-color: #f9440a;
`;

const OtherLoginGroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ButtonFacebookLogin = styled(Button)`
    margin: 5px;
    background: #1877f2;
    padding: 10px 10px 10px 2px;
    border-color: #1877f2;
`;

const ButtonAppleLogin = styled(Button)`
    margin: 5px;
    background: #000000;
    padding: 10px 10px 10px 2px;
    border-color: #000000;
`;

const ButtonGoogleLogin = styled(Button)`
    margin: 5px;
    background: #ecf3ff;
    padding: 10px 10px 10px 2px;
    border-color: #adcbe3;

    color: black;
`;

const RegisterGroup = styled.div`
    color: #0055AA;

    margin: 30px 0px 20px 0px;
    text-align: center;
`;

export default LoginPage;