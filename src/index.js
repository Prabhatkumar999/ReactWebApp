import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Assests/Components/Header';
import Product from './Assests/Components/Product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Product/>
  </React.StrictMode>
);