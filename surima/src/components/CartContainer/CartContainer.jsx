import { React } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


export const CartContainer = () => {
    const {productCartList} = useContext(CartContext);

    return (
        <>
            <h2>cart container</h2>

            {
                productCartList.map(item => (
                    <p>{item.name}</p>
                ))
            }
        </>
    )
}