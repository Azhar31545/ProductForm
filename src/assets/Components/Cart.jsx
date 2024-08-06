function Cart({ cart }) {
  return (
    <div>
      {cart.map((product, index) => (
        <div key={index}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Cart;
