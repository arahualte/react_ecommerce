import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Lógica para armar el array de productos agregados al carrito
  const [cart, setCart] = useState([]);

  const addProductToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeProductFromCart = (product) => {
    const aux = cart.filter((cartProduct) => product.id !== cartProduct.id);
    setCart(aux);
  };

  return (
    <CartContext.Provider
      value={{ cart, addProductToCart, removeProductFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
