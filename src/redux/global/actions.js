const types = {
    //categories
    GET_LIST_CATEGORIES: 'GET_LIST_CATEGORIES',
    GET_LIST_CATEGORIES_SUCCESS: 'GET_LIST_CATEGORIES_SUCCESS',
    GET_LIST_CATEGORIES_FAILED: 'GET_LIST_CATEGORIES_FAILED',

    //brands
    GET_LIST_BRANDS: 'GET_LIST_BRANDS',
    GET_LIST_BRANDS_SUCCESS: 'GET_LIST_BRANDS_SUCCESS',
    GET_LIST_BRANDS_FAILED: 'GET_LIST_BRAND_FAILED',

    //toast
    ADD_TOAST: 'ADD_TOAST',
    REMOVE_TOAST: 'REMOVE_TOAST',
    UPDATE_STATE: 'UPDATE_STATE',

    //CART
    GET_SYNC_CART: 'GET_SYNC_CART',
    GET_SYNC_CART_SUCCESS: 'GET_SYNC_CART_SUCCESS',
    GET_SYNC_CART_FAILED: 'GET_SYNC_CART_FAILED',
    ADD_TO_CART: 'ADD_TO_CART',
    UPDATE_QUANTITY_CART_ITEM: 'UPDATE_CART_ITEM',
    UPDATE_QUANTITY_CART_ITEM_REDUCER: 'UPDATE_QUANTITY_CART_ITEM_REDUCER',
    DELETE_CART_ITEM: 'DELETE_CART_ITEM',
    ADD_CART_ITEM_TO_PRE_PAYMENT: 'ADD_CART_ITEM_TO_PRE_PAYMENT',
    REMOVE_CART_ITEM_TO_PRE_PAYMENT: 'REMOVE_CART_ITEM_TO_PRE_PAYMENT'
}

const actions = {

    //categories actions
    getListCategories: () => {
        return {
            type: types.GET_LIST_CATEGORIES,
            payload: {}
        }
    },

    getListCategoriesSuccess: (listCategoriesResult) => {
        return {
            type: types.GET_LIST_CATEGORIES_SUCCESS,
            payload: {
                listCategoriesResult
            }
        }
    },

    getListCategoriesFailed: (error) => {
        return {
            type: types.GET_LIST_CATEGORIES_FAILED,
            payload: {
                error
            }
        }
    },

    //brands actions
    getListBrands: () => {
        return {
            type: types.GET_LIST_BRANDS,
            payload: {}
        }
    },

    getListBrandsSuccess: (listBrandsResult) => {
        return {
            type: types.GET_LIST_BRANDS_SUCCESS,
            payload: {
                listBrandsResult
            }
        }
    },

    getListBrandsFailed: (error) => {
        return {
            type: types.GET_LIST_BRANDS_FAILED,
            payload: {
                error
            }
        }
    },

    //toast
    addToast: (options) => {
        return {
            type: types.ADD_TOAST,
            payload: {
                options
            }
        }
    },

    removeToast: (id) => {
        return {
            type: types.REMOVE_TOAST,
            payload: {id}
        }
    },

    //cart
    addToCart: (productId, quantity) => {
        return {
            type: types.ADD_TO_CART,
            payload: {
                productId, 
                quantity
            }
        }
    },

    getSyncCart: () => {
        return {
            type: types.GET_SYNC_CART,
            payload: {}
        }
    },

    getSyncCartSuccess: (cartItemsResult) => {
        return {
            type: types.GET_SYNC_CART_SUCCESS,
            payload: {
                cartItemsResult
            }
        }
    },

    getSyncCartFailed: (error) => {
        return {
            type: types.GET_SYNC_CART_SUCCESS,
            payload: {
                error
            }
        }
    },

    updateQuantityCartItem: (cartItemId, quantity) => {
        return {
            type: types.UPDATE_QUANTITY_CART_ITEM,
            payload: {
                cartItemId,
                quantity
            }
        }
    },

    updateQuantityCartItemReducer: (cartItemId, quantity) => {
        return {
            type: types.UPDATE_QUANTITY_CART_ITEM_REDUCER,
            payload: {
                cartItemId,
                quantity
            }
        }
    },
    
    deleteCartItem: (cartItemId) => {
        return {
            type: types.DELETE_CART_ITEM,
            payload: {
                cartItemId
            }
        }
    },

    addCartItemToPrePayment: (cartItem) => {
        return {
            type: types.ADD_CART_ITEM_TO_PRE_PAYMENT,
            payload: {
                cartItem
            }
        }
    },

    removeCartItemToPrePayment: (cartItemId) => {
        return {
            type: types.REMOVE_CART_ITEM_TO_PRE_PAYMENT,
            payload: {
                cartItemId
            }
        }
    },

    updateState: (state) => {
        return{
            type: types.UPDATE_STATE,
            payload: {state}
        }
    }
}

const globalActions = {
    types,
    actions
}

export default globalActions;