import {  } from "../../styles/components/Productos.scss";

export const Productos = ({imagen, title, description}) => {
    return (
        <div className="contenedorProductos">
            <img src={imagen} alt="Imagen de producto" className="imgProductos"/>
            <h3>{title}</h3>
            <p>{description}</p>
            <button>Añadir {title}</button>
        </div>
    )
}