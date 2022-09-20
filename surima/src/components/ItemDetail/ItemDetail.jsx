import { useState, useEffect } from "react";
import { getFetch } from "../../helper/productos";
import { useParams } from "react-router-dom";
import '../../styles/components/ItemDetail.css'
import { ItemCount } from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const ItemDetail = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const {tipoProducto} = useParams();
    
    const {addProduct} = useContext(CartContext);
    
    let onAdd = (contador) => {
        const newProduct = {...data, quantity:contador};
        addProduct(newProduct);
    }

    useEffect (() => {
        getFetch
        .then(response => {
            setData(response.find(data => data.id === parseInt(tipoProducto)))
            setLoading(false)
            
        })
    }, [tipoProducto])
    
    return ( 
        <div>
            <h1>ItemDetailContainer</h1>
        {
            loading ? <h2>Cargando...</h2>

            :

            <div className="containerItemDetail">
                <img src={data.img} alt="" className="imgItemDetail"/>
                <p>{data.name}</p>
                <p>{data.description}</p>
                <p>precio: ${data.precio}</p>
                <ItemCount onAdd={onAdd}/>
            </div>
        }
        </div>
    )
}