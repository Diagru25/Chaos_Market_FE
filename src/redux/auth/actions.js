const types = {
    CHECK_SESSION: 'CHECK_SESSION',

    LOGIN_CLIENT: 'LOGIN_CLIENT',

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

    getUserInfo: () => {
        return {
            type: types.GET_USER_INFO,
            payload: {}
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