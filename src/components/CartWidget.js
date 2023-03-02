import { useCarrito } from './CarritoProvider'

const CardWidget = (props) => {
    const { totalProductos, totalPrecio } = useCarrito()

    return (
        <div>
            <button><img src="https://firebasestorage.googleapis.com/v0/b/app-camisetas-coder.appspot.com/o/cart.svg?alt=media&token=15575793-d440-4bc0-8309-348c263ecadd" width="20" height="20" className="d-inline-block align-top" alt=""/><span>{totalProductos}</span><span> - ${totalPrecio}</span></button>
        </div>
    )
}

export default CardWidget