import React, {createContext,useReducer} from 'react';

import * as actionTypes from './actions'
import reducer from './reducer';


const initialState = {
    transactions: []
}
export const GlobalContext = createContext(initialState);

export const GlobalProvider  = (props)=>{
    const [state,dispatch]= useReducer(reducer,initialState);
   
    function addTransaction(transaction) {
        dispatch({
            type: actionTypes.ADD_TRANSACTION,
            payload: transaction
        })
    }
    function deleteTransaction(id) {
        dispatch({
            type: actionTypes.REMOVE_TRANSACTION,
            payload: id
        });
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            addTransaction,
            deleteTransaction
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

