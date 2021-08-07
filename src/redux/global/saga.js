import { all, fork, put, takeEvery, select } from 'redux-saga/effects';
import actions from './actions';
import categoryAPI from '../../services/api/categoryAPI';

function* getAllCategories_saga() {
    try {
        const data = yield categoryAPI.getAllCategories();

        yield put(actions.actions.getListCategoriesSuccess({ items: data }));
    }
    catch (error) {
        yield put(actions.actions.getListCategoriesFailed(error))
        console.log('[GLOBAL SAGA][getAllCategories_saga]', error);
    }
}

function* listen() {
    yield takeEvery(actions.types.GET_LIST_CATEGORIES, getAllCategories_saga);

}

export default function* globalSaga() {
    yield all([fork(listen)]);
}