const ItemListContainer = (props) => {
    const { greeting } = props;
    return (
        <div class="row justify-content-center p-5">
            <div class="card shadow carta-contenedor bg-body rounded text-center ">
                <p class="texto-card">{greeting}</p>
            </div>
        </div>
    )
}


export default ItemListContainer