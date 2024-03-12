import React, {createContext, useContext, useState} from "react";
import {useLocalStorage} from "../hooks/useLocalStorage";
const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useLocalStorage(
        'shopping-cart',
        []
    )

    return (
        <CartContext.Provider value={{ cartItems, setCartItems}}>
            {children}
        </CartContext.Provider>
    );
};

const useCart = () => {
    const context = useContext(CartContext)
    if(!context) {
        throw new Error('useCart must work together with CartProvider')
    }
    return context;
}

export { CartProvider, useCart, CartContext };

