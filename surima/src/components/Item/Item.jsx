import { Link } from 'react-router-dom';
import '../../styles/components/Item.css';

export const Item = ({data}) => {
    return (
        <div>
            <Link key={data.id} to={`/Productos/${data.id}`}>
                <div key={data.name} className="containerItem">
                    <img src={data.img} alt="Imagen de producto" className='imgItem'/>
                    <h4>{data.name}</h4>
                    <p>{data.description}</p>
                    <p>precio: ${data.precio}</p>
                </div>
            </Link>          
        </div>
    )
}
