import {request} from './baseRequest';


const authAPI = {
    checkSession(){
        return request({
            url: '/auth/check-session',
            method: 'GET',
            isAuthRequest: true
        })
    },

    loginClient(username, password) {
        return request({
            url: '/auth/login',
            method: 'POST',
            data: {
                username: username,
                password: password
            },
            isAuthRequest: false
        })
    }
}

export default authAPI;
