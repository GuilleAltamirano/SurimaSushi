import { Link } from 'react-router-dom';
import '../../styles/components/iconosFlotantes.scss'
import carrito from "../IconosFlotantes/img/carrito.png";
import whatsapp from "../IconosFlotantes/img/whatsapp.png";

function IconosFlotantes() {
    return (
        <>
            <Link to="/cart">
                <img src={carrito} alt="Logo de carrito de compras" className='carrito'/>
            </Link>
            <a href="#" ><img src={whatsapp} alt="Logo de whatsapp" className='whatsapp'/></a>
        </>
    )
};

export default IconosFlotantes;