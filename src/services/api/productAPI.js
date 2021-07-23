import {request} from './baseRequest';

const productAPI = {
    getBestSellerProducts() {
        return request({
            url: '/v1/products/best-seller',
            method: 'GET'
        })
    }
}

export default productAPI;