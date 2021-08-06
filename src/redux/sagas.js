
import {all} from 'redux-saga/effects';
import globalSaga from './global/saga';
import client_HomeSaga from './client/home_page/saga';
import authSaga from './auth/saga';
import cartSaga from './client/cart/saga';

export default function* rootSaga() {
    yield all([
        globalSaga(),
        authSaga(),
        client_HomeSaga(),
        cartSaga()
    ])
}