import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { API_URL } from '../core/Axios';
import Axios from 'axios';
import promiseMiddleware from 'redux-promise-middleware';
//state
const initialStateData = {
  todos: []
};
//Reducer
const reducerData = (state = initialStateData, action) => {
  switch (action.type) {
    case 'ALL_TODOS_FULFILLED':
      state = { ...state, todos: action.payload.data };
      break;

    default:
  }
  return state;
};

//state

//combine
const combineReducer = combineReducers({ reducerData });

//middleware
const middleware = applyMiddleware(promiseMiddleware());

//Store
const store = createStore(combineReducer, middleware);

//Subsribe
store.subscribe(() => {
  console.log(store.getState(), '>>>>>>>');
});

store.dispatch({
  type: 'ALL_TODOS',
  payload: Axios.get(`${API_URL}/api/list`)
});

export default store;
