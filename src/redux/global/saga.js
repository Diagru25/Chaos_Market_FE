import { all, fork, put, select, takeEvery } from 'redux-saga/effects';
import actions from './actions';
import categoryAPI from '@src/services/api/categoryAPI';
import cartAPI from '@src/services/api/cartAPI';

function* getAllCategories_saga() {
    try {
        const res = yield categoryAPI.getAllCategories();
        const { items } = res.data;

        if (items)
            yield put(actions.actions.getListCategoriesSuccess({ items }));
    }
    catch (error) {
        yield put(actions.actions.getListCategoriesFailed(error))
        console.log('[GLOBAL SAGA][getAllCategories_saga]', error);
    }
}

function* getSyncCart_saga() {
    try {
        const res = yield cartAPI.getSyncCart();

        if (res.statusCode === 200) {
            const { total, items } = res.data;

            yield put(actions.actions.getSyncCartSuccess({ total, items }));
        }

    }
    catch (error) {
        yield put(actions.actions.getSyncCartFailed(error))
        console.log('[GLOBAL SAGA][getSyncCart_saga]', error);
    }
}

function* addToCart_saga(action) {
    try {
        const { productId, quantity } = action.payload;

        if (productId && quantity > 0) {
            const res = yield cartAPI.addToCart(productId, quantity);

            if (res.statusCode === 201) {
                yield put(actions.actions.addToast({
                    type: 'success',
                    title: 'Add to cart success'
                }));
                yield put(actions.actions.getSyncCart());
            }
        }
        else {
            console.log('Param cart items not right, check input again');
        }

    }
    catch (error) {
        console.log('[GLOBAL SAGA][addToCart_saga]', error);
    }
}

function* updateQuantityCartItem_saga(action) {
    try {
        const { cartItemId, quantity } = action.payload;
        const carts = yield select(state => state.globalReducer.carts);
        const res = yield cartAPI.updateQuantityCartItem(cartItemId, quantity);

        if (res.statusCode === 200) {
            const { quantity } = res.data.cartItem;
            const foundIndex = yield carts.items.findIndex(item => item._id);

            carts.items[foundIndex].quantity = quantity;

            yield put(actions.actions.updateState(carts))
        }
        else {
            console.log('update failed');
        }
    }
    catch (error) {
        console.log('[GLOBAL SAGA][updateQuantityCartItem_saga]', error);
    }
}

function* deleteCartItem_saga(action) {
    try {
        const { cartItemId } = action.payload;

        const res = yield cartAPI.deleteCartItem(cartItemId);

        if (res.statusCode === 200) {
            yield put(actions.actions.getSyncCart());
        }
    }
    catch (error) {
        console.log('[GLOBAL SAGA][deleteCartItem_saga]', error);
    }
}

function* listen() {
    yield takeEvery(actions.types.GET_LIST_CATEGORIES, getAllCategories_saga);
    yield takeEvery(actions.types.GET_SYNC_CART, getSyncCart_saga);
    yield takeEvery(actions.types.ADD_TO_CART, addToCart_saga);
    yield takeEvery(actions.types.UPDATE_QUANTITY_CART_ITEM, updateQuantityCartItem_saga);
    yield takeEvery(actions.types.DELETE_CART_ITEM, deleteCartItem_saga);
}

export default function* globalSaga() {
    yield all([fork(listen)]);
}