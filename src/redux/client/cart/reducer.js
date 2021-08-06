import cartActions from "./actions";

const initialState = {
    items: [],
    isGetSyncCartPending: false,
    error: null
}

const reducer = (state = initialState, action) => {
    const payload = action.payload;

    switch(action.type) {
        case cartActions.types.ADD_TO_CART:
            return state;
        case cartActions.types.UPDATE_STATE:
            return {
                ...state,
                ...payload.state
            }
        default:
            return state
    }
}

export default reducer;