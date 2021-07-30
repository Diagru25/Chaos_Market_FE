import globalReducer from './global/reducer';
import client_HomeReducer from './client/home_page/reducer';
import authReducer from './auth/reducer';

const reducers = {
    globalReducer,
    authReducer,
    client_HomeReducer    
}

export default reducers;