import { useState } from "react";

export const Contador = (stock, agregarProducto) => {
    let [acu, setAcu] = useState(1);

    const sumar = () => {
        if (acu >= stock) {
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

    return(
        <>
            <p>Numero actual = {acu}</p>
            <button onClick={sumar}>suma +</button>
            <button onClick={restar}>resta -</button>
            <button onClick={ () => (agregarProducto(acu)) }>Agregar</button>
        </>
        
    )
}