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
      <div className="mx-auto mt-2" style={{ width: "25em", maxWidth:"25em" }}>
        <div className="d-flex  align-items-center  flex-column">
          <Header name="Muhammad Sami" />
          <Balance />
          <Summary/>
          <TransactionHistory/>
          <AddTransaction/>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
