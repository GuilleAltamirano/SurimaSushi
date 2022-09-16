import combinadoImg from '../../images/Secciones/combos.png'

export const Combinado = () => {
    return(
        <div className='containerOfrecemos'>
            <ul className='containerUlOfrecemos'>
                <li>- Combo Variado,</li>
                <li>- Combo Salmon y Langostino,</li>
                <li>- Combo Todo Salmon.</li>
            </ul>
            <div>
                <img src={combinadoImg} alt="" className='imgOfrecemos'/>
            </div>
        </div>
    )
}