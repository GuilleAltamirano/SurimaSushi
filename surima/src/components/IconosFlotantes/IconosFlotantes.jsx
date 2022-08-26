import '../../styles/components/iconosFlotantes.scss'
import carrito from "../IconosFlotantes/img/carrito.png";
import whatsapp from "../IconosFlotantes/img/whatsapp.png";

function IconosFlotantes() {
    return (
        <>
            <a href="#" ><img src={carrito} alt="Logo de carrito de compras" className='carrito'/></a>
            <a href="#" ><img src={whatsapp} alt="Logo de whatsapp" className='whatsapp'/></a>
        </>
    )
};

export default IconosFlotantes;