import React, { useState } from 'react';
import ProductForm from './assets/Components/Productform';
import ProductList from './assets/Components/Productlist';
import Cart from './assets/Components/Cart';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [error, setError] = useState('');

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const addToCart = (product) => {
    if (cart.some(item => item.title === product.title)) {
      setError('Product already in cart');
    } else {
      setCart([...cart, product]);
      setError('');
    }
  };

  return (
    <div>
      <h1>Product Form</h1>
      <ProductForm addProduct={addProduct} />
      <h2>Products</h2>
      <ProductList products={products} addToCart={addToCart} />
      <h2>Cart</h2>
      <Cart cart={cart} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default App;
