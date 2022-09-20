import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext('Mi primer contexto');

export const CartProvider = ({children}) => {
    const [productCartList, setProductCartList] = useState([]);

    const addProducts = (products) => {
        const newList = [...productCartList, products];
        setProductCartList(newList);
    }

    const deleteProduct = (idProduct) => {
        const copyArray = [...productCartList];
        const newArray = copyArray.filter(elm=>elm.id !== idProduct);
        setProductCartList(newArray);
    }

    const clearProductCartList = () => {
        setProductCartList([]);
    }
    const isInCart = (id) => {
        const elementExists = productCartList.some((element) => element.id === id);
    }

    return (
        <CartContext.Provider value={{productCartList, addProducts, deleteProduct, clearProductCartList, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}