import { db } from "../../utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useContext, useState  } from "react";
import { CartContext } from "../../context/CartContext";
import ReCAPTCHA from "react-google-recaptcha";

export const Form = () => {
    const [idOrder, setIdOrder] = useState("");
    const {productCartList} = useContext(CartContext);
    const [verificacion, setVerificacion] = useState(false)
    
    const sendOrder = (e) => {
        e.preventDefault();

        const order = {
            buyer: {
                name: e.target[0].value,
                telefono: e.target[1].value,
                email: e.target[2].value,
            },
            producs: {
                productCartList
            }
        }
        const queryRef = collection(db, "orders");
        addDoc(queryRef, order).then(respuesta=>setIdOrder(respuesta.id));
    }

    function onChange() {
        setVerificacion(true);
    }

    return(
        <form onSubmit={sendOrder} className="bg-black">
            <input type="text" placeholder="nombre"/>
            <input type="text" placeholder="telefono"/>
            <input type="email" placeholder="email"/>
            <div className="reCaptcha">
            <ReCAPTCHA
                sitekey="6LddXX8iAAAAAP_mqXG4SRMCxbnyWv8EZLv5XggZ"
                onChange={onChange}
            />
            </div>
            <button type="submit" disabled={!verificacion}>
                enviar orden
            </button>
        </form>
    )
}