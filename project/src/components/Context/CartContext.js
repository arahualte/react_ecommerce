import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProductToCart = (cartProduct) => {
    return setCart([...cart, cartProduct]);
  };

  const isInCart = (id) => {
    return cart.some((el) => el.id === id);
  };

  const removeProductFromCart = (product) => {
    const aux = cart.filter((cartProduct) => product.id !== cartProduct.id);
    setCart(aux);
  };

  const totalItemsOnCart = () => {
    let sum = 0;
    cart.forEach((Item) => {
      sum += Item.amount;
    });
    return sum;
  };

  const totalToPay = () => {
    return cart.reduce((acc, el) => acc + el.amount * el.price, 0);
  };

  const cleanCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        removeProductFromCart,
        totalItemsOnCart,
        cleanCart,
        isInCart,
        totalToPay,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
