import { useEffect, useState } from "react";
import { getFetch } from "../../helper/productos";
import { Item } from "../Item/Item";

export const ItemList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFetch.then(data => {
            setData(data);
            setLoading(false);
        })
    }, [])

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


