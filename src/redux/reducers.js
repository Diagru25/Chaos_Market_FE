import globalReducer from './global/reducer';
import client_HomeReducer from './client/home_page/reducer';
import authReducer from './auth/reducer';
import cartReducer from './client/cart/reducer';
import productReducer from './client/product/reducer';

const reducers = {
    globalReducer,
    authReducer,
    client_HomeReducer,
    cartReducer,
    productReducer
}

export default reducers;