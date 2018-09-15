import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './redux/Redux';
import Todos from './component/view/View';

class App extends Component {
  render() {
    return (
      <div>
        <Todos />
      </div>
    );
  }
}

export default App;
