import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/products";

const ProductList = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };
    // const fetchProducts =() => {
    //     return fetch('https://fakestoreapi.com/products')
    //     .then((response) =>response.json())
    //     .then((json) => {
    //         return dispatch(setProducts(json.data));
    //     })};
  

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);
  return (
    <div className="products-container">
      {products.map((product)=> ( 
          <div key={product.id} className="card">
           <div><img src={product.image} alt="#"/></div>
           <div className="card-description">
               <h6>{product.title}</h6>
               <h6>{`Price: ${product.price}`}</h6>
               <h6>{`Rate: ${product.rating.rate} / ${product.rating.count}`}</h6>
           </div>
          </div>
      ))}
    </div>
  );
};

export default ProductList;