import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { CartProvider } from './context/CartContext.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <CartProvider>
    <App />
  </CartProvider>
);
