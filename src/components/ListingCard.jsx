import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { motion} from "framer-motion";
import { useNavigate } from 'react-router';

function ListingCard({ item }) {
  const { addToCart } = useCart();
  const [open, setOpen] = useState(false);
  const {user} = useAuth();
  const navigate = useNavigate();

  return (
      <motion.div 
        className="card"
        exit={{ opacity: 0, scale: 0 }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        {/* Listing image */}
        <img src={item.img} alt={item.name} />

        {/* Card content */}
        <div className="card-body">
          <div className="card-title">
            <span>{item.name}</span>
            <span className="pill">{item.gate}</span>
          </div>

          <div className="muted" style={{ marginTop: 6 }}>
            From <span className="price">₦{item.price.toLocaleString()}</span> / year
          </div>

          {/* Show more details */}
          {open && <p style={{ marginTop: 10 }}>{item.details}</p>}
        </div>

        {/* Actions */}
        <div className="card-actions">
          <button className="btn ghost" onClick={() => setOpen(v => !v)}>
            {open ? 'Hide Details' : 'View More'}
          </button>
          <button className="btn" onClick={() =>{ user ? addToCart(item.id) : navigate('/login')}}>
            Add to Cart
          </button>
        </div>
      </motion.div>
  );
}

export default ListingCard;
