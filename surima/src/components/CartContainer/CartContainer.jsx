import { React } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Form } from "../Form/Form";
import "../../styles/components/CartContainer.css";


export const CartContainer = () => {
    const {productCartList, deleteProduct, clearProductCartList, productBuy} = useContext(CartContext);

    return (
        <div className="bg-black">
            <h2>cart container</h2>

            <div className="bg-black">
                {
                    productCartList.length>0 ?
                    <>
                        {
                            productCartList.map(item => (
                                <div>
                                    <div className="containerProductCart bg-black" key={item}>
                                        <img src={item.img} alt="" />
                                        <p>{item.name}</p>
                                        <p>Precio: $ {item.precio}</p>
                                        <p>Cantidad: {item.quantity}</p>
                                        <p>Precio total: $ {item.totalPrice}</p>
                                        <button onClick={()=>deleteProduct(item.id)}>Eliminar producto</button>
                                    </div>
                                </div>
                            ))
                        }
                    </>

                    :

                    <p>No hay productos agregados</p>
                }
            </div>
            
            {console.log(productBuy())}
            <Form/>
            <button onClick={clearProductCartList}>Limpiar Carrito</button>
        </div>
    )
}