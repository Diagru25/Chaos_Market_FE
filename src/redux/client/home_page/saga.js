import { fork, all, takeEvery, put } from 'redux-saga/effects';
import client_HomeActions from './actions';
import productAPI from '@src/services/api/productAPI';

function* getBestSellerProducts_saga() {
    try {
        const res = yield productAPI.getBestSellerProducts();
        const {items} = res.data;

        if(items)
            yield put(client_HomeActions.actions.getListBestSellerProductSuccess({ items }));
    }
    catch (error) {
        yield put(client_HomeActions.actions.getListBestSellerProductFailed(error))
        console.log('[CLIENT_HOME_PAGE SAGA][getBestSellerProducts_saga]', error);
    }
}

function* listen() {
    yield takeEvery(client_HomeActions.types.GET_LIST_BEST_SELLER_PRODUCT, getBestSellerProducts_saga);
}

export default function* globalSaga() {
    yield all([fork(listen)]);
}

