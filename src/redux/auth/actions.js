const types = {
    CHECK_SESSION: 'CHECK_SESSION',

    LOGIN_CLIENT: 'LOGIN_CLIENT',
    LOGIN_CLIENT_GOOGLE: 'LOGIN_CLIENT_GOOGLE',
    LOG_OUT: 'LOG_OUT',

    GET_USER_INFO: 'GET_USER_INFO',

    UPDATE_STATE: 'UPDATE_STATE'
}

const actions = {

    checkSession: () => {
        return {
            type: types.CHECK_SESSION,
            payload: {}
        }
    },

    loginClient: (username, password) => {
        return {
            type: types.LOGIN_CLIENT,
            payload: {
                username,
                password
            }
        }
    },

    loginClientGoogle: (googleToken) => {
        return {
            type: types.LOGIN_CLIENT_GOOGLE,
            payload: { googleToken }
        }
    },

    getUserInfo: () => {
        return {
            type: types.GET_USER_INFO,
            payload: {}
        }
    },

    logout: (username = '') => {
        return {
            type: types.LOG_OUT,
            payload: {
                username
            }
        }
    },

    updateState: state => {
        return {
            type: types.UPDATE_STATE,
            payload: {
                state
            }
        }
    }
}

const authActions = {
    types,
    actions
}

export default authActions;