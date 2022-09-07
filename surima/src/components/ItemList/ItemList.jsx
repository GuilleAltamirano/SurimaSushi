import { useEffect, useState } from "react";
import { getFetch } from "../../helper/productos";
import { Item } from "../Item/Item";
import { useParams } from "react-router-dom";


export const ItemList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const {tipoProducto} = useParams();

    useEffect(() => {
        getFetch.then(data => {
            if(!tipoProducto){
                setData(data);
                setLoading(false);
            }else {
                const nuevaLista = data.filter(data=>data.name === tipoProducto);
                setData(nuevaLista);
                setLoading(false);
            }
        })
    }, [tipoProducto])

    return (
        <>
            <h3>Productos Ofrecidos</h3>

        {
            loading ? <h2>Cargando</h2>

            :

            <div>
                {data.map(data => (
                    <Item key={data.name} data={data}/>
                ))}
            </div>
        }
        </>
    )
}


