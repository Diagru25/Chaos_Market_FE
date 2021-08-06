import {request} from './baseRequest';

const cartAPI = {
    addToCart: (cart) => {
        return request({
            url: '/v1/carts',
            method: 'POST',
            data: {
                items: cart
            }
        })
    }
}

export default cartAPI;