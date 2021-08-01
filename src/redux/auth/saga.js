import authAPI from '@src/services/api/authAPI';
import { fork, all, takeEvery, put } from 'redux-saga/effects';
import authActions from './actions';

import { writeLocalStorage } from '@src/components/packages/core/helpers/localStorage';
import { ACCESS_TOKEN } from '@src/constant/auth.constants';
import globalActions from '../global/actions';

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

        if (res.code === 200) {
            const sessionKey = res.access_token;
            writeLocalStorage(ACCESS_TOKEN, sessionKey);

            const userInfo = res.user;

            yield put(authActions.actions.updateState({
                sessionKey: sessionKey,
                isLoggedIn: true,
                isLoading: false,
                userInfo: userInfo,
                error: null
            }))

            yield put(globalActions.actions.addToast({
                title: 'Sign in success',
                description: 'Welcome to Chaos market!',
                type: 'success'
            }))
        }

        //sync cart

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

function* listen() {
    yield takeEvery(authActions.types.CHECK_SESSION, checkSession_saga);
    yield takeEvery(authActions.types.LOGIN_CLIENT, loginClient_saga);
}

export default function* authSaga() {
    yield all([fork(listen)]);
}