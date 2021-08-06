const types = {
    GET_SYNC_CART: 'GET_SYNC_CART',
    ADD_TO_CART: 'ADD_TO_CART',
    UPDATE_STATE: 'UPDATE_STATE'
}

const actions = {
    addToCart: (items) => {
        return {
            type: types.ADD_TO_CART,
            payload: {
                items
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
    },
}

const cartActions = {
    types,
    actions
}

export default cartActions;