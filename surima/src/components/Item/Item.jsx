import { Link } from 'react-router-dom';
import '../../styles/components/Item.scss';

export const Item = ({data}) => {
    return (
        <div>
            <Link key={data.id} to={`/Productos/${data.id}`}>
                <div key={data.name}>
                    <h1>{data.name}</h1>
                    <img src={data.img} alt="Imagen de producto" />
                </div>
            </Link>          
        </div>
    )
}