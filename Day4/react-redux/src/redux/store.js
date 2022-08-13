import { combineReducers, createStore } from 'redux';
import { productsReducer, selectedProductsReducer } from './products/reducers';

const rootReducer = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
});

export const store = createStore(rootReducer);

export default store;