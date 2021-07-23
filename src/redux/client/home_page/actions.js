const types = {
    GET_LIST_BEST_SELLER_PRODUCT: 'GET_LIST_BEST_SELLER_PRODUCT',
    GET_LIST_BEST_SELLER_PRODUCT_SUCCESS: 'GET_LIST_BEST_SELLER_PRODUCT_SUCCESS',
    GET_LIST_BEST_SELLER_PRODUCT_FAILED: 'GET_LIST_BEST_SELLER_PRODUCT_FAILED',
}

const actions = {
    getListBestSellerProduct() {
        return {
            type: types.GET_LIST_BEST_SELLER_PRODUCT,
            payload: {}
        }
    },
    getListBestSellerProductSuccess(bestSellerProductsResult) {
        return {
            type: types.GET_LIST_BEST_SELLER_PRODUCT_SUCCESS,
            payload: { 
                bestSellerProductsResult 
            }
        }
    },
    getListBestSellerProductFailed(error) {
        return {
            type: types.GET_LIST_BEST_SELLER_PRODUCT_FAILED,
            payload: {
                error
            }
        }
    }

}

const client_HomeActions = {
    types,
    actions
}

export default client_HomeActions;