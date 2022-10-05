import { Link } from 'react-router-dom';
import '../../styles/components/Item.css';

export const Item = ({items}) => {
    return (
        <div>
            <Link key={items.id} to={`/Productos/${items.id}`}>
                <div key={items.name} className="containerItem">
                    <img src={items.img} alt="Imagen de producto" className='imgItem'/>
                    <h4>{items.title}</h4>
                    <p>{items.description}</p>
                    <p>precio: ${items.precio}</p>
                </div>
            </Link>          
        </div>
    )
}
