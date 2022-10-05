import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import '../../styles/components/ItemDetail.css'
import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import { db } from "../../utils/firebase";
import { doc, getDoc } from "firebase/firestore";

export const ItemDetail = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const {productId} = useParams();
    
    const {addProduct} = useContext(CartContext);
    
    let onAdd = (contador) => {
        const newProduct = {...data, quantity:contador};
        addProduct(newProduct, contador);
    }

    useEffect (() => {
        let queryRef = doc(db, "items", productId);
        getDoc(queryRef).then(response => {
            const newDoc = {
                ...response.data(),
                id:response.id
            }
            setData(newDoc)
            setLoading(false)
        })
    }, [productId])
    
    return ( 
        <div>
            <h1>ItemDetailContainer</h1>
        {
            loading ? <h2>Cargando...</h2>

            :

            <div className="containerItemDetail">
                <img src={data.img} alt="" className="imgItemDetail"/>
                <p>{data.title}</p>
                <p>{data.description}</p>
                <p>${data.precio}</p>
                <ItemCount onAdd={onAdd}/>
            </div>
        }
        </div>
    )
}