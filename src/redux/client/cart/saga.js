import cartAPI from '@src/services/api/cartAPI';
import { all, takeEvery, put, fork } from 'redux-saga/effects';
import cartActions from './actions';

function* addToCart_saga(action) {
    try {
        const cart = action.payload.items;

        if (cart && cart.length > 0) {
            const res = yield cartAPI.addToCart(cart);
            console.log(res);
        }
        else {
            console.log('Param cart not right, check input again');
        }

    }
    catch (error) {
        console.log('[CART SAGA][addToCart_saga]', error);
    }
}

function* listen() {
    //yield takeEvery(cartActions.types.ADD_TO_CART, addToCart_saga);
}

export default function* cartSaga() {
    yield all([fork(listen)]);
}