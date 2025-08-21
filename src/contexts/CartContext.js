import { createContext, useContext } from 'react';

// Export CartCtx as a named export
export const CartCtx = createContext(null);
export const useCart = () => useContext(CartCtx);