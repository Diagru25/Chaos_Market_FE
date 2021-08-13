import productActions from "./actions";

const defaultProduct = {
    name: '',
    description: '',
    category_id: '',
    brand_id: '',
    price: 0,
    rating: 0,
    status: '',
    import_date: 0,
    image: '',
    sold: 0
}

const initialState = {
    productList: {
        items: [],
        isGetProductListPending: false,
        error: null,
        textSearch: '',
        category_id: '',
        brand_id: '',

        pageTitle: ''
    },

    currentProduct: defaultProduct
}

const reducer = (state = initialState, action) => {
    const payload = action.payload;

    switch (action.type) {
        case productActions.types.GET_PRODUCT_LIST:
            return {
                ...state,
                productList: {
                    ...state.productList,
                    isGetProductListPending: true
                }
            }
        case productActions.types.GET_PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                productList: {
                    ...state.productList,
                    ...payload.productListResult,
                    isGetProductListPending: false
                }
            }
        case productActions.types.GET_PRODUCT_LIST_FAILED:
            return {
                ...state,
                productList: {
                    ...state.productList,
                    isGetProductListPending: false,
                    error: payload.error
                }
            }

        case productActions.types.GET_PRODUCT_BY_ID:
            return state;
        
        case productActions.types.UPDATE_STATE:
            return {
                ...state,
                ...payload.state
            }
        default:
            return state;
    }
}

export default reducer;