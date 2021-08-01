import authActions from "./actions";
import { readLocalStorage } from '@helpers/localStorage';
import { ACCESS_TOKEN } from '@src/constant/auth.constants';

const _getSessionKey = () => {
    const sessionKey = readLocalStorage(ACCESS_TOKEN);
    return sessionKey ? sessionKey : null
}

const initialState = {
    sessionKey: _getSessionKey(),
    isLoggedIn: _getSessionKey() != null,

    isLoading: false,
    error: null,
    userInfo: null
}

const reducer = (state = initialState, action) => {

    const payload = action.payload;

    switch (action.type) {

        case authActions.types.CHECK_SESSION:
            return state

        case authActions.types.LOGIN_CLIENT:
            return {
                ...state,
                ...{
                    isLoading: true
                }
            }

        case authActions.types.UPDATE_STATE:
            return {
                ...state,
                ...payload.state
            }
        default:
            return state
    }
}

export default reducer;