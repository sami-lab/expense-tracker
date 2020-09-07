import React from 'react';

const Transaction = (props) => {

    const sign = props.transaction.transactionAmount > 0 ? '+' : '-';
    const transactionType = props.transaction.transactionAmount > 0;
    return (
        <li className="card shadow d-flex flex-row justify-content-between py-2 mx-1 my-1" style={{ borderRight: transactionType ? "5px solid #b6960a" : "5px solid #2da3ad" }}>

            <h5 className="ml-3">{props.transaction.description}</h5>
            <span>{sign}${Math.abs(props.transaction.transactionAmount)}
                <button className="close"
                    onClick={() => props.deleteTransaction(props.transaction.id)}>
                    &times;
            </button>
            </span>


        </li>
    )
};

export default Transaction;