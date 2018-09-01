import { createStore, combineReducers } from 'redux';

//state
const initialStateData = {
  number: 0
};

//Reducer
const reducer = (state = initialStateData, action) => {
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

//Store
const store = createStore(combineReducers({ reducer }));

//Subsribe
store.subscribe(() => {
  console.log(store.getState());
});

export default store;
