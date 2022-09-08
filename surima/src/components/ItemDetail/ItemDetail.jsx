import { useState, useEffect } from "react";
import { getFetch } from "../../helper/productos";
import { useParams } from "react-router-dom";

export const ItemDetail = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const {tipoProducto} = useParams();
    console.log("tipo", tipoProducto)

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

            <div>
                <img src={data.img} alt="" />
                <p>{data.name}</p>
                <h2>{data.id}</h2>
            </div>
        }
        </div>
    )
}