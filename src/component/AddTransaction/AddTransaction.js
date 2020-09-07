import React, { useState, useContext } from 'react';

import { GlobalContext } from '../../context/GlobalContext';

const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext);
    const [description,setDescription] =useState('');
    const [amount,setAmount] =useState('');
    const SubmitHandler = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: new Date().getTime(),
            description,
            transactionAmount: +amount
        }

        addTransaction(newTransaction);
        setAmount('');
        setDescription('');
    }
    return (
        <div className="w-100">
             <h3 className="text-center">
               Add Transaction 
            </h3>
            <hr style={{width: "90%"}}/>
            <form onSubmit={SubmitHandler}>
                <div className="form-group">
                    <label htmlFor="description" className="control-label font-weight-bolder">
                        Description
                    </label>
                    <input type="text" className="form-control"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Detail of Transaction"
                        required="required"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="amount"  className="control-label font-weight-bolder">
                        Transaction Amount  <span className="font-weight-smaller">(Negative- Expense, Postive+ income)</span>
                    </label>
                    <input  type="number" className="form-control"
                            id="amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Dollar Value of Transaction"
                            required="required"
                    />
                </div>
                <button type="submit" 
                disabled={
                  amount.length ===0 || amount*1 ===0 || description.length === 0
                }
                className="btn btn-block btn-primary">Add Transaction</button>
            </form>
        </div>
    )
};

export default AddTransaction;