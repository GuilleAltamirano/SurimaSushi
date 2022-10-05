import { React } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Form } from "../Form/Form";
import "../../styles/components/CartContainer.css";


export const CartContainer = () => {
    const {productCartList, deleteProduct, clearProductCartList, getTotalPrecio} = useContext(CartContext);

    return (
        <>
            <h2>cart container</h2>

            <div>
                {
                    productCartList.length>0 ?
                    <>
                        {
                            productCartList.map(item => (
                                <div className="containerProductCart" key={item}>
                                    <img src={item.img} alt="" />
                                    <p>{item.name}</p>
                                    <p>Precio: $ {item.precio}</p>
                                    <p>{item.quantity}</p>
                                    <p>Precio total: $ {}</p>
                                    <button onClick={()=>deleteProduct(item.id)}>Eliminar producto</button>
                                </div>
                            ))
                        }
                    </>

                    :

                    <p>No hay productos agregados</p>
                }
            </div>

            <Form/>
            <button onClick={clearProductCartList}>Limpiar Carrito</button>
        </>
    )
}