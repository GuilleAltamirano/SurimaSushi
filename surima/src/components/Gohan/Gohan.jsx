import gohanImg from '../../images/Secciones/gohan.png'

export const Gohan = () => {
    return (
        <div className='containerOfrecemos'>
            <div>
                <img src={gohanImg} alt="" className='imgOfrecemos'/>
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