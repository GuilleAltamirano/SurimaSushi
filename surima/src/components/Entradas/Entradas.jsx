import { Link } from 'react-router-dom'
import entradasImg from '../../images/Secciones/entradas.png'
import '../../styles/components/Entradas.css'

export const Entradas = () => {
    return (
        <div className='containerOfrecemos bg-black'>
            <div>
                <Link to={"/categoria/entradas"}>
                    <img src={entradasImg} alt="" className='imgOfrecemos'/>
                </Link>
            </div>
            <ul className='containerUlOfrecemos'>
                <li>- Empanadas Chinas,</li>
                <li>- Langostino Rebozados,</li>
                <li>- Salmon Boom</li>
            </ul>

        </div>
    )
}