import { useEffect, useState } from "react";

const functionExterna = () => {
    console.log("1")
};

export const Contador = () => {
    let [acu, setAcu] = useState(1);
    let stock = 5;
    
    useEffect( () => {
        console.log("1")
    }, [] );

    const sumar = () => {
        if (acu >= stock) {
            alert("Error, no contamos con ese stock")
        }else {
            setAcu(acu += 1);
        }
    };

    const restar = () => {
        if (acu == 1) {
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
            {functionExterna()}
        </>
        
    )
}