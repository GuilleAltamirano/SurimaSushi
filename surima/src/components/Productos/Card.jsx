import "../../styles/components/Productos.scss";
import { useState } from "react";


export const Card = ({producto}) => {
    let [acu, setAcu] = useState(1);

    //Contador   
    const sumar = () => {
        if (acu >= producto.stock) {
            alert("Error, no contamos con ese stock")
        }else {
            setAcu(acu += 1);
        }
    };

    const restar = () => {
        if (acu === 1) {
            alert("Error, debe ser mayor a 1")
        } else {
            setAcu(acu -= 1);
        } 
    };
    
    return (
        <div className="contenedorProductos">
            <img src={producto.img} alt="Imagen de producto" className="imgProductos"/>
            <h3>{producto.title}</h3>
            <p>{producto.description}</p>
            <button>Añadir {producto.title}</button>
            <p>Cantidad Actual a pedir: {acu}</p>
            <button onClick={sumar}>suma +</button>
            <button onClick={restar}>resta -</button>
        </div>
    )
}