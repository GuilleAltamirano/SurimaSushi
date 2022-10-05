import "../../styles/components/ItemList.css";
import { useEffect, useState } from "react";
import { Item } from "../Item/Item";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { useParams } from "react-router-dom";


export const ItemList = () => {
    const [productos, setProductos] = useState([]);
    const {categoria} = useParams();
    const [loading, setLoading] = useState(true)


    useEffect(()=>{
        const getData = async ()=> {
            try {
                let queryRef = !categoria ? collection(db, "items") : query(collection(db, "items"), where("categoria", "==", categoria));
                
                const response = await getDocs(queryRef);
                const datos = response.docs.map(doc=>{
                    const newDoc = {
                        ...doc.data(),
                        id:doc.id
                        
                    }
                    return newDoc;
                    
                });
                setProductos(datos);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        getData();
    }, [categoria]);
    
    return (
        <div>
            <h3>Productos Ofrecidos</h3>
            {
                loading === true ?
                    <p>cargando...</p>
                
                :

                    <div>
                        {
                            productos.map(producto => (
                                <Item items={producto}/>
                            ))
                        }
                    </div>
            }
        </div>
    )
}


