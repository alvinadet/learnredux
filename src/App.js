import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './redux/Redux';

class App extends Component {
  componentDidMount() {
    console.log(store.getState());
  }

  addData = () => {
    let number = store.getState().reducer.number;
    number = number + 1;
    store.dispatch({
      type: 'INC',
      payload: number
    });
  };

  minusData = () => {
    let number = store.getState().reducer.number;
    number = number - 1;
    store.dispatch({
      type: 'DESC',
      payload: number
    });
  };
  render() {
    const store1 = store.getState().reducer.number;
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
