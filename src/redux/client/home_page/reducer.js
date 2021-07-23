import client_HomeActions from "./actions";

const initialState = {
    bestSellerProducts: {
        items: [],
        isGetBestSellerProductPending: false,
        error: null
    },
    newProducts: {
        items: [],
        isGetBestSellerProductPending: false,
        error: null
    }
}

const reducer = (state = initialState, action) => {

    const payload = action.payload;
    
    switch (action.type) {
        case client_HomeActions.types.GET_LIST_BEST_SELLER_PRODUCT:
            return {
                ...state,
                bestSellerProducts: {
                    ...state.bestSellerProducts,
                    isGetBestSellerProductPending: true
                }
            }
        case client_HomeActions.types.GET_LIST_BEST_SELLER_PRODUCT_SUCCESS:
            return {
                ...state,
                bestSellerProducts: {
                    ...state.bestSellerProducts,
                    ...payload.bestSellerProductsResult,
                    isGetBestSellerProductPending: false
                }
            }
        case client_HomeActions.types.GET_LIST_BEST_SELLER_PRODUCT_FAILED:
            return {
                ...state,
                bestSellerProducts: {
                    ...state.bestSellerProducts,
                    error: payload.error,
                    isGetBestSellerProductPending: false
                }
            }
        default: return { ...state }
    }
}

export default reducer;