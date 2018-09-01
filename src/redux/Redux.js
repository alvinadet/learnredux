import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

//state => untuk initial state
const initialStateData = {
  number: 0
};

//Reducer => Mengurangi, supaya semua fungsi bisa dityampung dalam satu file, yaitu redux
const reducerData = (state = initialStateData, action) => {
  switch (action.type) {
    case 'INC':
      state = { ...state, number: action.payload };
      break;
    case 'DESC':
      state = { ...state, number: action.payload };
      break;

    default:
  }
  return state;
};
//Combine reducers => untuk memasukan reducer lebih dari satu
const combineReducer = combineReducers({ reducerData });

//middleware => untuk debugging dalam redux
//logger => package untuk mendebugg
const middleware = applyMiddleware(logger);

//Store => membuat data
const store = createStore(combineReducer, middleware);

//Subsribe => berlanganan, saya gunakan di index.js
store.subscribe(() => {
  console.log(store.getState());
});

//promise_midleware

export default store;
