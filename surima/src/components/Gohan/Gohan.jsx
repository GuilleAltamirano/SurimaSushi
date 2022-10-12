import { Link } from 'react-router-dom'
import gohanImg from '../../images/Secciones/gohan.png'

export const Gohan = () => {
    return (
        <div className='containerOfrecemos bg-black'>
            <div>
                <Link to={"/categoria/gohan"}>
                    <img src={gohanImg} alt="" className='imgOfrecemos'/>
                </Link>
            </div>
            <ul className='containerUlOfrecemos'>
                <li>- Gohan Langostino,</li>
                <li>- Gohan Salmon,</li>
                <li>- Gohan Shurima,</li>
                <li>- Gohan Kanikama.</li>
            </ul>
        </div>
    )
}