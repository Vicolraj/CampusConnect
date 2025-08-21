import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import { Link, useNavigate } from 'react-router';

function CartPage(){
  const { listings } = useAuth();
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();
  const items = listings.filter(l=> cart.includes(l.id));
  const total = items.reduce((sum, x) => sum + x.price, 0);

  const checkout = () => {
    if(items.length === 0) return alert('Your cart is empty.');
    // Mock payment flow
    alert(`Payment successful! (mock)\nTotal: ₦${total.toLocaleString()}`);
    clearCart();
    navigate('/listings');
  };

  return (
    <div className="shell">
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p className="muted">No items yet. Browse <Link to="/listings">Listings</Link>.</p>
      ) : (
        <>
          <div className="grid cards">
            {items.map(item => (
              <div className="card" key={item.id}>
                <img src={item.img} alt={item.name} />
                <div className="card-body">
                  <div className="card-title"><span>{item.name}</span><span className="pill">{item.gate}</span></div>
                  <div className="muted" style={{marginTop:6}}>₦{item.price.toLocaleString()}</div>
                </div>
                <div className="card-actions">
                  <button className="btn danger" onClick={()=>removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="toolbar" style={{justifyContent:'space-between'}}>
            <div><strong>Total:</strong> ₦{total.toLocaleString()}</div>
            <div style={{display:'flex', gap:8}}>
              <button className="btn ghost" onClick={clearCart}>Clear Cart</button>
              <button className="btn" onClick={checkout}>Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;