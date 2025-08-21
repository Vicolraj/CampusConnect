import React, { useMemo, useState } from "react";
import { initialListings } from '../utils/mockData';
import { AuthCtx } from './AuthContext';
import { CartCtx } from './CartContext';

function AppProviders({ children }){
  const [user, setUser] = useState(null); // {role: 'student'|'agent', name, listings:[ids]}
  const [listings, setListings] = useState(initialListings);
  const [cart, setCart] = useState([]); // array of listing ids

  const login = (payload) => setUser(payload);
  const logout = () => { setUser(null); setCart([]); localStorage.setItem('campusconnectusertoken', '')};

  const addToCart = (id) => setCart((c) => (c.includes(id) ? c : [...c, id]));
  const removeFromCart = (id) => setCart((c) => c.filter((x) => x !== id));
  const clearCart = () => setCart([]);

  const addListing = (item) => setListings((prev) => [{...item, id: crypto.randomUUID()}, ...prev]);

  const value = useMemo(() => ({ user, login, logout, listings, addListing }), [user, listings]);
  const cartValue = useMemo(() => ({ cart, addToCart, removeFromCart, clearCart }), [cart]);

  return (
    <AuthCtx.Provider value={value}>
      <CartCtx.Provider value={cartValue}>{children}</CartCtx.Provider>
    </AuthCtx.Provider>
  );
}

export default AppProviders;