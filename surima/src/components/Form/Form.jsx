import { db } from "../../utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const Form = () => {
    const [idOrder, setIdOrder] = useState("");
    const {productCartList, productBuy} = useContext(CartContext);
    
    const sendOrder = (e) => {
        e.preventDefault();

        const order = {
            buyer: {
                name: e.target[0].value,
                telefono: e.target[1].value,
                email: e.target[2].value,
            },
        }
        const queryRef = collection(db, "orders");
        addDoc(queryRef, order).then(respuesta=>setIdOrder(respuesta.id));
    }

    return(
        <form onSubmit={sendOrder} className="bg-black">
            <input type="text" placeholder="nombre"/>
            <input type="text" placeholder="telefono"/>
            <input type="email" placeholder="email"/>
            <button type="submit">
                enviar orden
            </button>
        </form>
    )
}