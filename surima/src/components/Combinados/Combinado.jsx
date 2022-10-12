import { Link } from 'react-router-dom'
import combinadoImg from '../../images/Secciones/combos.png'

export const Combinado = () => {
    return(
        <div className='containerOfrecemos bg-black'>
            <ul className='containerUlOfrecemos'>
                <li>- Combo Variado,</li>
                <li>- Combo Salmon y Langostino,</li>
                <li>- Combo Todo Salmon.</li>
            </ul>
            <div>
                <Link to={"/categoria/combinados"}>
                    <img src={combinadoImg} alt="" className='imgOfrecemos'/>
                </Link>
            </div>
        </div>
    )
}