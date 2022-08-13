export const FETCH_PRODUCT = 'FETCH_PRODUCT';

export const fetchProduct = (product) => {
  return {
    type: FETCH_PRODUCT,
    payload: product,
  };
};