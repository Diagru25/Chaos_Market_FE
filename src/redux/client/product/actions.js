const types = {
    GET_PRODUCT_LIST: 'GET_PRODUCT_LIST',
    GET_PRODUCT_LIST_SUCCESS: 'GET_PRODUCT_LIST_SUCCESS',
    GET_PRODUCT_LIST_FAILED: 'GET_PRODUCT_LIST_FAILED',

    GET_PRODUCT_BY_ID: 'GET_PRODUCT_BY_ID',

    UPDATE_STATE: 'UPDATE_STATE'
}

const actions = {

    getProductList: (params = {}) => {
        return {
            type: types.GET_PRODUCT_LIST,
            payload: {
                params
            }
        }
    },
    getProductListSuccess: (productListResult = []) => {
        return {
            type: types.GET_PRODUCT_LIST_SUCCESS,
            payload: {
                productListResult
            }
        }
    },
    getProductListFailed: (error) => {
        return {
            type: types.GET_PRODUCT_LIST_FAILED,
            payload: {
                error
            }
        }
    },

    getProductById: (productId) => {
        return {
            type: types.GET_PRODUCT_BY_ID,
            payload: {
                productId
            }
        }
    },

    updateState: (state) => {
        return {
            type: types.UPDATE_STATE,
            payload: {
                state
            }
        }
    }
}

const productActions = {
    types,
    actions
}

export default productActions;