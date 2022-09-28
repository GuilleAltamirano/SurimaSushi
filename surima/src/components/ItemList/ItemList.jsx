import "../../styles/components/ItemList.css";
import { useEffect, useState } from "react";
import { Item } from "../Item/Item";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { async } from "@firebase/util";
import { db } from "../../utils/firebase";


export const ItemList = () => {
    useEffect(()=>{
        const getData = async ()=> {
            try {
                const queryRef = collection(db, "items");
                const response = await getDocs(queryRef);
                const data = response.docs.map(doc=>{
                    const newDoc = {
                        ...doc.data(),
                        id:doc.id
                    }
                    return newDoc;
                })
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    });

    return (
        <>
            <h3>Productos Ofrecidos</h3>

        {
            loading ? <h2>Cargando</h2>

            :

            <div className="containerItemList">
                {data.map(data => (
                    <Item key={data.name} data={data}/>
                ))}
            </div>
        }
        </>
    )
}


