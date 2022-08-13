import {
    FETCH_PRODUCT,
  } from './actions';
  
  export const initialState = {
    productList: [],
  };
  
  export const products = (state = initialState, action) => {
    console.log(`REDUCER INTERCEPTED ACTION: ${action.type}`);
    switch (action.type) {
      case FETCH_PRODUCT:
        console.log(`NEW STATE RETURNED`);
        return {
          ...state,
          productList: [
            ...state.productList,
            action.payload,
          ]
        };
      default:
        return state;
    }
  }