import * as actionTypes from './actions'

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.ADD_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.concat(action.payload)
            }
        case actionTypes.REMOVE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        default:
            return state;
    }
}

export default reducer;