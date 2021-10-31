import React from 'react';

import Header from './Header/header';
import Balance from './Balance/balance';
import Summary from './AccountSummary/Summary';
import TransactionHistory from './TransactionHistory/transactionHistory';
import AddTransaction from './AddTransaction/AddTransaction';

export default function Main() {
  return (
    <div className="mx-auto mt-2">
      <Header name="Muhammad Sami" />
      <div className="row d-flex justify-content-center">
        <div className="col-md-5 col-sm-12 ">
          <div className="d-flex  align-items-center  flex-column">
            <Balance />
            <Summary />
          </div>
        </div>
        <div className="col-md-5 col-sm-12">
          <div className="d-flex  align-items-center  flex-column">
            <AddTransaction />
            <TransactionHistory />
          </div>
        </div>
      </div>
    </div>
  );
}
