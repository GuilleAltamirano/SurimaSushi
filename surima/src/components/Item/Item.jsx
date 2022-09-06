import '../../styles/components/Item.scss';

export const Item = ({data}) => {
    return (
        <div>
            <div key={data.name}>
                <h1>{data.name}</h1>
                <img src={data.img} alt="Imagen de producto" />
            </div>
        </div>
    )
}