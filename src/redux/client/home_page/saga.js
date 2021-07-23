import { fork, all, takeEvery, put } from 'redux-saga/effects';
import client_HomeActions from './actions';
import productAPI from '@src/services/api/productAPI';

function* getBestSellerProducts_saga() {
    try {
        const data = yield productAPI.getBestSellerProducts();

        yield put(client_HomeActions.actions.getListBestSellerProductSuccess({ items: data }));
    }
    catch (error) {
        yield put(client_HomeActions.actions.getListBestSellerProductFailed(error))
        console.log('[GLOBAL SAGA][getAllCategories_saga]', error);
    }
}

function* listen() {
    yield takeEvery(client_HomeActions.types.GET_LIST_BEST_SELLER_PRODUCT, getBestSellerProducts_saga);
}

export default function* globalSaga() {
    yield all([fork(listen)]);
}

