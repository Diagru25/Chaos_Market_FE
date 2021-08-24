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
    },


    updateQuantityCartItem: (cartItemId, quantity) => {
        return request({
            url: `/v1/carts/${cartItemId}`,
            method: 'PUT',
            isAuthRequest: true,
            data: {
                quantity
            }
        })
    },

    deleteCartItem: (cartItemId) => {
        return request({
            url: `/v1/carts/${cartItemId}`,
            method: 'DELETE',
            isAuthRequest: true
        })
    }
    
}

export default cartAPI;