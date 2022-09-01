export const Item = ({data}) => {
    return (
        <div>
            <div key={data.name}>
                <img src={data.img} alt="Imagen de producto" />
                <h1>{data.name}</h1>
                <p>{data.description}</p>
            </div>
        </div>
    )
}