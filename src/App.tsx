import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state/index';


function App() {

  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch);
  const amount = useSelector((state: State) => state.bank);

  return (
    <div className="App">
      <div className="container">
        <h1>Bank Account</h1>
        <h3>Balance : {amount}$</h3>
        <div className="row">
          <div className="col-md-12">            
            <button className="btn btn-primary m-2" onClick={() => depositMoney(1000)}>Deposit</button>
            <button className="btn btn-warning m-2" onClick={() => withdrawMoney(1000)}>Withdraw</button>
            <button className="btn btn-danger m-2" onClick={() => bankrupt()}>Bankrupt</button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
