import { all, fork, put, takeEvery } from 'redux-saga/effects';
import actions from './actions';
import categoryAPI from '@src/services/api/categoryAPI';
import cartAPI from '@src/services/api/cartAPI';

function* getAllCategories_saga() {
    try {
        const res = yield categoryAPI.getAllCategories();
        const {items} = res.data;

        if(items)
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

        if(res.statusCode === 200) {
            const {total, items} = res.data;

            yield put(actions.actions.getSyncCartSuccess({total, items}));
        }

    }
    catch (error) {
        yield put(actions.actions.getSyncCartFailed(error))
        console.log('[GLOBAL SAGA][getSyncCart_saga]', error);
    }
}

function* addToCart_saga(action) {
    try {
        const {productId, quantity} = action.payload;

        if (productId && quantity > 0) {
            const res = yield cartAPI.addToCart(productId, quantity);

            if(res.statusCode === 201) {
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

function* listen() {
    yield takeEvery(actions.types.GET_LIST_CATEGORIES, getAllCategories_saga);
    yield takeEvery(actions.types.GET_SYNC_CART, getSyncCart_saga);
    yield takeEvery(actions.types.ADD_TO_CART, addToCart_saga);
}

export default function* globalSaga() {
    yield all([fork(listen)]);
}