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

  addData = () => {};
  render() {
    const store1 = store.getState().reducerData;
    return (
      <div className="App">
        {store1.todos.map(datum => {
          return (
            <div>
              <h1>{datum.nama}</h1>
              <h1>{datum.umur}</h1>
            </div>
          );
        })}
        <h1 />
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
