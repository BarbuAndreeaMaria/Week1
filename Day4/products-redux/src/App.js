import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { store } from './data';
import { ProductList } from './components/Products';

function App() {
  return (
    <Provider store={store}>
        <ProductList/>
    </Provider>
  );
}

export default App;
