/* eslint-disable react/prop-types */
import React from 'react';

function ProductList({ products, addToCart }) {
return (
    <div>
    {products.map((product, index) => (
        <div key={index}>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <button onClick={() => addToCart(product)}>Add To Cart</button>
        </div>
    ))}
    </div>
);
}

export default ProductList;
