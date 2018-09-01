import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

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

//combine
const combineReducer = combineReducers({ reducerData });

//middleware
const middleware = applyMiddleware(logger);

//Store
const store = createStore(combineReducer, middleware);

//Subsribe
store.subscribe(() => {
  console.log(store.getState());
});

export default store;
