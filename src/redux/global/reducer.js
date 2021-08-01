import globalActions from './actions';

const initialState = {
    categories: {
        items: [],
        isGetCategoriesPending: false,
        error: null
    },
    brands: {
        items: [],
        isGetBrandsPending: false,
        error: null
    },

    toasts: []
}

const reducer = (state = initialState, action) => {
    const payload = action.payload
    switch (action.type) {
        //categories
        case globalActions.types.GET_LIST_CATEGORIES:
            return {
                ...state,
                categories: {
                    ...state.categories,
                    isGetCategoriesPending: true
                }
            }
        case globalActions.types.GET_LIST_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: {
                    ...state.categories,
                    ...payload.listCategoriesResult,
                    isGetCategoriesPending: false
                }
            }
        case globalActions.types.GET_LIST_CATEGORIES_FAILED:
            return {
                ...state,
                categories: {
                    ...state.categories,
                    isGetCategoriesPending: false,
                    error: payload.error
                }
            }

        //brands
        case globalActions.types.GET_LIST_BRANDS:
            return {
                ...state,
                brands: {
                    ...state.brands,
                    isGetBrandsPending: true
                }
            }
        case globalActions.types.GET_LIST_BRANDS_SUCCESS:
            return {
                ...state,
                brands: {
                    ...state.brands,
                    ...payload.listBransResult,
                    isGetBrandsPending: false
                }
            }
        case globalActions.types.GET_LIST_BRANDS_FAILED: 
            return {
                ...state,
                brands: {
                    ...state.brands,
                    isGetBrandsPending: false,
                    error: payload.error
                }
            }
        
        //toasts
        case globalActions.types.ADD_TOAST:
            return {
                ...state,
                toasts: [...state.toasts, {...payload.options}]
            }
        case globalActions.types.REMOVE_TOAST:
            return {
                ...state,
                toasts: [...state.toasts].filter(element => element.id !== payload.id)
            }
        case globalActions.types.UPDATE_STATE: 
            return {
                ...state,
                ...payload.state
            }
        default:
            return { ...state }
    }
}

export default reducer;