import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import '../styles/Cart.css';

const Cart = () => {
  const { cart } = useContext(UserContext);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
