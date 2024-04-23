"use client";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => setCart([...cart, item]);
  const getItemsCart = () => {
    return cart;
  };
  const deleteItemCart = (id) =>
    setCart((oldItems) => {
      return oldItems.filter((product) => product.id !== id);
    });

  const isProductInCart = (id) => cart.some((product) => product.id === id);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, getItemsCart, deleteItemCart, isProductInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
