import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import { GlobalProvider } from './context/GlobalContext'
import Header from './component/Header/header'
import Balance from './component/Balance/balance';
import Summary from './component/AccountSummary/Summary';
import TransactionHistory from './component/TransactionHistory/transactionHistory';
import AddTransaction from './component/AddTransaction/AddTransaction';

const App = () => {
  return (
    <GlobalProvider>
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
    </GlobalProvider>
  );
}

export default App;
