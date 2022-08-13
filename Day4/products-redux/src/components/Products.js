import React from 'react'
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../src/data/products';

const PRODUCT_API = 'https://fakestoreapi.com/products/1';

export const ProductList = () => {
  const { productList } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  console.log(productList);

  const loadProduct = useCallback(() => {
    console.log('REQUEST STARTED');
    fetch(PRODUCT_API).then(resp => resp.json()).then(prodResp => {
      console.log('ACTION DISPATCHED');
      dispatch(fetchProduct(prodResp[0]));
    });
  }, [dispatch]);

  useEffect(() => {
    console.log('COMPONENT INIT');
    loadProduct();
  }, [loadProduct]);

  useEffect(() => {
    console.log(`RECEIVED STATE: ${JSON.stringify(productList)}`);
  }, [productList]);

  console.log('COMPONENT RENDER')

  return (
    <div>
      <button onClick={loadProduct}>
          Load more
      </button>
      <div className="products-container">
      {productList.map(product => (
        <div key={product.id} className="card">
          <div><img src={product.image} alt="#" /></div>
          <div className="card-description">
            <h6>{product.title}</h6>
            <h6>{`Price: ${product.price}`}</h6>
            <h6>{`Rate: ${product.rating.rate} / ${product.rating.count}`}</h6>
          </div>
        </div>
        
      ))}
    </div>
    </div>
    
  );
};