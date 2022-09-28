import React from "react";
import { useState, createContext } from "react";

export const CartContext = createContext('Mi primer contexto');

export const CartProvider = ({children}) => {
    const [productCartList, setProductCartList] = useState([]);

    const isInCart = (id) => {
        const elementExists = productCartList.some((elemento) => elemento.id === id);
        return elementExists;
    }
    
    const addProduct = (product) => {
        if(isInCart(product.id)){
            const newList = [...productCartList];
            const productIndex = productCartList.findIndex(element=>element.id===product.id);
            newList[productIndex].quantity = newList[productIndex].quantity + product.quantity; 
            newList[productIndex].precio = newList[productIndex].precio * newList[productIndex].quantity;
            
            setProductCartList(newList);
        }else{
            const newList = [...productCartList, product];
            newList.precio = product.precio * product.quantity;
            setProductCartList(newList);
        }
    }

    const deleteProduct = (idProduct) => {
        const copyArray = [...productCartList];
        const newArray = copyArray.filter(elm=>elm.id !== idProduct);
        setProductCartList(newArray);
    }

    const clearProductCartList = () => {
        setProductCartList([]);
    }

    const getTotalProducts = () => {
        const totalProducts = productCartList.reduce((acc,item)=>acc + item.quantity);
        return totalProducts;
    }
    

    return (
        <CartContext.Provider value={{productCartList, addProduct, deleteProduct, clearProductCartList, isInCart, getTotalProducts}}>
            {children}
        </CartContext.Provider>
    )
}