import { db } from "../../utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";

export const Form = () => {
    const [idOrder, setIdOrder] = useState("");
    
    const sendOrder = (e) => {
        e.preventDefault();

        const order = {
            buyer: {
                name: e.target[0].value,
                telefono: e.target[1].value,
                email: e.target[2].value,
            }
        }
        const queryRef = collection(db, "orders");
        addDoc(queryRef, order).then(respuesta=>setIdOrder(respuesta.id));
    }

    return(
        <form onSubmit={sendOrder}>
            <input type="text" placeholder="nombre"/>
            <input type="text" placeholder="telefono"/>
            <input type="email" placeholder="email"/>
            <button type="submit">enviar orden</button>
        </form>
    )
}