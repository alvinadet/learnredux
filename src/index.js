import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/Redux';

const render = () => ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

store.subscribe(render);
render();
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
