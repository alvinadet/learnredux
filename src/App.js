import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './redux/Redux';

class App extends Component {
  componentDidMount() {
    console.log(store.getState());
  }

  addData = () => {
    //store.getState()=> mengambil data dari global state
    let number = store.getState().reducerData.number;

    //menambahkan satu
    number = number + 1;

    //store.dispatch()=> data akan find actionnya di reducer
    store.dispatch({
      type: 'INC',
      payload: number
    });
  };

  minusData = () => {
    let number = store.getState().reducerData.number;
    number = number - 1;
    store.dispatch({
      type: 'DESC',
      payload: number
    });
  };
  render() {
    const store1 = store.getState().reducerData.number;
    return (
      <div className="App">
        <h1>{store1}</h1>
        <button
          onClick={() => {
            this.addData();
          }}>
          Tambah
        </button>
        <button
          onClick={() => {
            this.minusData();
          }}>
          Minus
        </button>
      </div>
    );
  }
}

export default App;
