import entradasImg from '../../images/Secciones/entradas.png'
import '../../styles/components/Entradas.css'

export const Entradas = () => {
    return (
        <div className='containerOfrecemos bg-black'>
            <div>
                <img src={entradasImg} alt="" className='imgOfrecemos'/>
            </div>
            <ul className='containerUlOfrecemos'>
                <li>- Empanadas Chinas,</li>
                <li>- Langostino Rebozados,</li>
                <li>- Salmon Boom</li>
            </ul>

        </div>
    )
}