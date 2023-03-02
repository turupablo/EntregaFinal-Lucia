import React from 'react';
import { useCarrito } from '../CarritoProvider';


const ItemCart = ({ producto }) => {
    const { eliminarProducto } = useCarrito();
    return (
        <div>
            <img src={producto.imagen} alt={producto.titulo} />
            <div>
                <p>Título: {producto.titulo}</p>
                <p>Cantidad: {producto.cantidad}</p>
                <p>Precio u.: {producto.precio}</p>
                <p>Subtotal: ${producto.cantidad * producto.precio}</p>
                <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart