import {request} from './baseRequest';

const productAPI = {
    getBestSellerProducts: () => {
        return request({
            url: '/v1/products/best-seller',
            method: 'GET'
        })
    },

    getProductById: (productId) => {
        return request({    
            url: `/v1/products/${productId}`,
            method: 'GET'
        })
    }
}

export default productAPI;