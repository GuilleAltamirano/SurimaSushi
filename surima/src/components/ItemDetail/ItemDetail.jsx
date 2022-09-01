import { useState, useEffect } from "react";
import { getFetch } from "../../helper/productos";

export const ItemDetail = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        getFetch
        .then(response => {
            setData(response.find(prod => prod.id === 1))
            setLoading(false)
            
        })
    })
    
    return ( 
        <div>
            <h1>ItemDetailContainer</h1>
        {
            loading ? <h2>Cargando...</h2>

            :

            <div>
                <img src={data.img} alt="" />
                <h2>{data.name}</h2>
                <p>{data.description}</p>
            </div>
        }
        </div>
    )
}