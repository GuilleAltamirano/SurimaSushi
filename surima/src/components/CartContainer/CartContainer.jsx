import { React } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "../../styles/components/CartContainer.css";


export const CartContainer = () => {
    const {productCartList, deleteProduct, clearProductCartList, isInCart} = useContext(CartContext);

    return (
        <>
            <h2>cart container</h2>

            {
                productCartList.map(item => (
                    <div>
                        <div className="containerProductCart">
                            <img src={item.img} alt="" />
                            <p>{item.name}</p>
                            <p>{item.precio}</p>
                            <p>{item.quantity}</p>
                            <button onClick={()=>deleteProduct(item.id)}>Eliminar producto</button>
                        </div>
                    </div>
                ))
            }

            <button onClick={()=>isInCart()}>comprobar</button>
            <button onClick={clearProductCartList}>Limpiar Carrito</button>
        </>
    )
}