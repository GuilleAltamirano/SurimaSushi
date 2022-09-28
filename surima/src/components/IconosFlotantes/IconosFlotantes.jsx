import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import '../../styles/components/iconosFlotantes.scss'
import carrito from "../IconosFlotantes/img/carrito.png";
import whatsapp from "../IconosFlotantes/img/whatsapp.png";

function IconosFlotantes() {
    const {getTotalProducts} = useContext(CartContext);
    
    return (
        <>
            <Link to="/cart">
                <img src={carrito} alt="Logo de carrito de compras" className='carrito'/>
                <span>{getTotalProducts}</span>
            </Link>
            <a href="#" ><img src={whatsapp} alt="Logo de whatsapp" className='whatsapp'/></a>
        </>
    )
};

export default IconosFlotantes;