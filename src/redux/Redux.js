import { createStore, combineReducers } from 'redux';

//state
const initialStateData = {
  number: 0
};
//Reducer
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

//state
const initialStateWord = {
  word: ''
};

const reducerWord = (state = initialStateWord, action) => {
  switch (action.type) {
    case 'Tambah':
      state = { ...state, word: action.payload };
      break;

    default:
      break;
  }
  return state;
};

//Store
const store = createStore(
  combineReducers({ reducerData, reducerWord }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//Subsribe
store.subscribe(() => {
  console.log(store.getState());
});

export default store;
