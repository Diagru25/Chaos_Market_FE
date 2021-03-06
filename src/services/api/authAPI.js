import {request} from './baseRequest';


const authAPI = {
    checkSession: () => {
        return request({
            url: '/auth/check-session',
            method: 'GET',
            isAuthRequest: true
        })
    },

    loginClient: (username, password) => {
        return request({
            url: '/auth/login',
            method: 'POST',
            data: {
                username: username,
                password: password
            },
            isAuthRequest: false
        })
    },

    loginClientGoogle: (googleToken) => {
        return request({
            url: '/auth/google-authentication',
            method: 'POST',
            data: {
                googleToken
            },
            isAuthRequest: false
        })
    },

    getUserInfo: () => {
        return request({
            url: '/v1/users/info',
            method: 'GET',
            isAuthRequest: true
        })
    }

}

export default authAPI;
