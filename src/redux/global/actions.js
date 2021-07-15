const types = {
    //categories
    GET_LIST_CATEGORIES: 'GET_LIST_CATEGORIES',
    GET_LIST_CATEGORIES_SUCCESS: 'GET_LIST_CATEGORIES_SUCCESS',
    GET_LIST_CATEGORIES_FAILED: 'GET_LIST_CATEGORIES_FAILED',

    //brands
    GET_LIST_BRANDS: 'GET_LIST_BRANDS',
    GET_LIST_BRANDS_SUCCESS: 'GET_LIST_BRANDS_SUCCESS',
    GET_LIST_BRANDS_FAILED: 'GET_LIST_BRAND_FAILED',
}

const actions = {

    //categories actions
    getListCategories() {
        return {
            type: types.GET_LIST_CATEGORIES,
            payload: {}
        }
    },

    getListCategoriesSuccess(listCategoriesResult) {
        return {
            type: types.GET_LIST_CATEGORIES_SUCCESS,
            payload: {
                listCategoriesResult
            }
        }
    },

    getListCategoriesFailed(error) {
        return {
            type: types.GET_LIST_CATEGORIES_FAILED,
            payload: {
                error
            }
        }
    },

    //brands actions
    getListBrands() {
        return {
            type: types.GET_LIST_BRANDS,
            payload: {}
        }
    },

    getListBrandsSuccess(listBrandsResult) {
        return {
            type: types.GET_LIST_BRANDS_SUCCESS,
            payload: {
                listBrandsResult
            }
        }
    },

    getListBrandsFailed(error) {
        return {
            type: types.GET_LIST_BRANDS_FAILED,
            payload: {
                error
            }
        }
    }
}

const globalActions = {
    types,
    actions
}

export default globalActions;