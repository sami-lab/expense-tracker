import React, { useContext } from 'react'


import { GlobalContext } from '../../context/GlobalContext';
import Transaction from './transaction';

const TransactionHistory = () => {

    const { transactions, deleteTransaction } = useContext(GlobalContext);
    return (
        <div className="w-100">
            <h3 className="text-center mt-3">
                Transaction History
            </h3>
            <hr style={{width: "90%"}}/>
            <ul className="list-unstyled">
                {transactions.map(transaction => 
                    (
                    <Transaction key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction}/>
                    )
                )}
            </ul>
        </div>
    )

}

export default TransactionHistory;