import {request} from './baseRequest';

const cartAPI = {
    addToCart: (productId, quantity) => {
        return request({
            url: '/v1/carts',
            method: 'POST',
            isAuthRequest: true,
            data: {
                productId,
                quantity
            }
        })
    },

    getSyncCart: () => {
        return request({
            url: '/v1/carts',
            method: 'GET',
            isAuthRequest: true
        })
    }
    
}

export default cartAPI;