import authAPI from '@src/services/api/authAPI';
import { fork, all, takeEvery, put } from 'redux-saga/effects';
import authActions from './actions';

import { clearLocalStorage, writeLocalStorage } from '@src/components/packages/core/helpers/localStorage';
import { ACCESS_TOKEN } from '@src/constant/auth.constants';
import globalActions from '../global/actions';
import cartActions from '../client/cart/actions';

function* checkSession_saga() {
    try {
        const res = yield authAPI.checkSession();

        if (res.statusCode !== 200) {
            yield put(authActions.actions.updateState({
                isLoading: false,
                isLoggedIn: false,
                sessionKey: null
            }));
        }
    }
    catch {
        yield put(authActions.actions.updateState({
            isLoading: false,
            isLoggedIn: false,
            sessionKey: null
        }));
    }
}

function* loginClient_saga(action) {
    try {
        const { username, password } = action.payload;

        const res = yield authAPI.loginClient(username, password);

        if (res.statusCode === 200) {
            const sessionKey = res.data.access_token;
            writeLocalStorage(ACCESS_TOKEN, sessionKey);

            yield put(authActions.actions.updateState({
                sessionKey: sessionKey,
                isLoggedIn: true,
                isLoading: false,
                error: null
            }));

            yield put(authActions.actions.getUserInfo());

            yield put(globalActions.actions.addToast({
                title: 'Sign in success',
                description: 'Welcome to Chaos market!',
                type: 'success'
            }));
        }

        yield put(globalActions.actions.getSyncCart());

    }
    catch {
        yield put(authActions.actions.updateState({
            isLoading: false,
            isLoggedIn: false,
            sessionKey: null,
            error: 'Sign in failed'
        }));

        yield put(globalActions.actions.addToast({
            title: 'Sign in failed',
            description: 'Check your account or internet, please!',
            type: 'error'
        }))
    }
}

function* loginClientGoogle_saga(action) {
    try {

        const googleToken = action.payload.googleToken;
        const res = yield authAPI.loginClientGoogle(googleToken);

        if (res.statusCode === 200) {
            const sessionKey = res.data.access_token;
            writeLocalStorage(ACCESS_TOKEN, sessionKey);

            yield put(authActions.actions.updateState({
                sessionKey: sessionKey,
                isLoggedIn: true,
                isLoading: false,
                error: null
            }));

            yield put(authActions.actions.getUserInfo());
            yield put(globalActions.actions.getSyncCart());

            yield put(globalActions.actions.addToast({
                title: 'Sign in success',
                description: 'Welcome to Chaos market!',
                type: 'success'
            }));
        }

    } catch (error) {
        console.log('[AUTH_SAGA][loginClientGoogle_saga]', error);
    }
}

function* getUserInfo_saga() {
    try {
        const res = yield authAPI.getUserInfo();
        const { user } = res.data;

        if (user) {
            yield put(authActions.actions.updateState({
                isLoading: false,
                isLoggedIn: true,
                userInfo: user,
                error: null
            }))
        }
        else {
            yield put(authActions.actions.updateState({
                isLoading: false,
                isLoggedIn: false,
                sessionKey: null,
                userInfo: null
            }));

            clearLocalStorage(ACCESS_TOKEN);
        }
    }
    catch (error) {
        yield put(authActions.actions.updateState({
            isLoading: false,
            isLoggedIn: false,
            sessionKey: null,
            error: 'Get user info failed'
        }));
    }
}

function* logout_saga(action) {
    try {
        clearLocalStorage(ACCESS_TOKEN);

        yield put(globalActions.actions.addToast({
            title: `Good bye ${action.payload.username}`,
            type: 'info'
        }))

        yield put(authActions.actions.updateState({
            isLoading: false,
            isLoggedIn: false,
            sessionKey: null,
            error: null,
            userInfo: null
        }));

        yield put(cartActions.actions.updateState({
            items: []
        }));
    }
    catch (error) {
        console.log('[AUTH_SAGA][logout]', error);
    }

}

function* listen() {
    yield takeEvery(authActions.types.CHECK_SESSION, checkSession_saga);
    yield takeEvery(authActions.types.LOGIN_CLIENT, loginClient_saga);
    yield takeEvery(authActions.types.GET_USER_INFO, getUserInfo_saga);
    yield takeEvery(authActions.types.LOG_OUT, logout_saga);
    yield takeEvery(authActions.types.LOGIN_CLIENT_GOOGLE, loginClientGoogle_saga);
}

export default function* authSaga() {
    yield all([fork(listen)]);
}