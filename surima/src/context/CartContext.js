import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext('Mi primer contexto');

export const CartProvider = ({children}) => {
    const [productCartList, setProductCartList] = useState([]);

    const addProducts = (products) => {
        const newList = [...productCartList, products];
        setProductCartList(newList);
    }

    return (
        <CartContext.Provider value={{productCartList, addProducts}}>
            {children}
        </CartContext.Provider>
    )
}