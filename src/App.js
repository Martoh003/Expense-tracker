import React from 'react';
import Header from './components/Header'; // Assuming Header.js is located in the components directory under src
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TranscationList from './components/TranscationList';
import AddTransaction from './components/AddTransaction';


import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TranscationList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
