import '../../styles/components/IconosFlotantes.scss'
import carrito from "../IconosFlotantes/img/carrito.png";
import whatsapp from "../IconosFlotantes/img/whatsapp.png";

function IconosFlotantes() {
    return (
        <>
            <a href="#"><img src={carrito} alt="Logo de carrito de compras" className='iconosFlotantes'/></a>
            <a href="#"><img src={whatsapp} alt="Logo de whatsapp" className='iconosFlotantes'/></a>
        </>
    )
};

export default IconosFlotantes;