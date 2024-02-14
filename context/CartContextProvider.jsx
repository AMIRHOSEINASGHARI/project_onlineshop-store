"use client";

import React, { createContext, useContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {};

const reducer = (state, action) => {};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return [state, dispatch];
};

export { useCart };
export default CartContextProvider;
