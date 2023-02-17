import Item from "./Item"

const ItemList = ({productos}) => {
    return (
        <section className="row justify-content-center product-container container mx-auto ">
            {productos.map((producto) => {
                return (
                    <Item producto={producto} key={producto.id}/>
                )
            })}
        </section>
    )
}

export default ItemList