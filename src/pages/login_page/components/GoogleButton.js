import React from 'react';
import GoogleLogin from 'react-google-login';
import authActions from '@src/redux/auth/actions';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';
import Button from '@src/components/packages/base/Button';
import {FcGoogle} from 'react-icons/fc';

const GoogleButton = () => {

    const dispatch = useDispatch();
    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

    const handleSuccess = (response) => {
        if ('accessToken' in response) {
            const accessToken = response.accessToken;
            dispatch(authActions.actions.loginClientGoogle(accessToken));
        }
    };

    return (
        <GoogleLogin
            render={renderProps => (
                <ButtonGoogleLogin onClick={renderProps.onClick} disabled={renderProps.disabled}>
                    <FcGoogle/>
                    Google
                </ButtonGoogleLogin>
            )}
            clientId={clientId}
            buttonText="Google"
            onSuccess={handleSuccess}
        />
    );
}

const ButtonGoogleLogin = styled(Button)`
    margin: 5px;
    background: #ecf3ff;
    padding: 10px 10px 10px 2px;
    border-color: #adcbe3;

    color: black;
`;


export default GoogleButton;