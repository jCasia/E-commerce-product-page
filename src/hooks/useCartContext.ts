import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

export const useCartContext = () => {
  return useContext(CartContext);
};
