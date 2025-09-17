import React from 'react';
import '../Component/Login.css';

const Orders = ({ cartItems, handleRemoveFromCart, handleDeleteFromCart }) => {
  if (cartItems.length === 0) return <h2>Your Orders are Empty</h2>;

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className='orders-page'>
      <h1>Your Orders</h1>
      <div className='orders-grid'>
        {cartItems.map(item => (
          <div key={item.id} className='order-card'>
            <img src={item.img} alt={item.name} width="150" height="100" />
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.qty}</p>
            <p>Total: ${item.price * item.qty}</p>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>

              <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
              <button onClick={() => handleDeleteFromCart(item.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <h2>Total Price: ${totalPrice}</h2>
    </div>
  );
};

export default Orders;
