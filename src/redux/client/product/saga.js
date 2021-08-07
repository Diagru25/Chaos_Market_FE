import { all, fork, select, put, takeEvery } from 'redux-saga/effects';
import productAPI from '@src/services/api/productAPI';
import productActions from './actions';

function* getProductById(action) {
    try {
        const { productId } = action.payload;
        console.log(productId);

        const res = yield productAPI.getProductById(productId);
        console.log(res);
        if(res) {
            yield put(productActions.actions.updateState({currentProduct: res}));
        }
    }
    catch (error) {
        console.log('[PRODUCT_SAGA][getProductById]', error);
    }
    
}


function* listen() {
    yield takeEvery(productActions.types.GET_PRODUCT_BY_ID, getProductById);
}

export default function* productSaga() {
    yield all([fork(listen)]);
}