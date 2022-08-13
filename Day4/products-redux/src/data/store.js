import { combineReducers, createStore } from 'redux';
import { products } from './products';

const rootReducer = combineReducers({
  products,
});

export const store = createStore(rootReducer);