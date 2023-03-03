import React from 'react';
import { useCarrito ,botonElim} from '../CarritoProvider';


const ItemCarrrito = ({ producto }) => {
    const { eliminarProducto ,  botonElim } = useCarrito();


    return (
        <div className='carrito-contenedor rounded m-auto p-1'>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='carrito-contenedor-limitador'>
                    <img className='carrito-contenedor-imagen' src={`${producto.imagen}`} alt={producto.titulo} />
                </div>
                <div>
                    <p>{producto.titulo}</p>
                    <p>Cantidad: {producto.cantidad}</p>

                </div>
                <p>Precio: ${producto.precio}</p>
                <p>Subtotal: ${producto.cantidad * producto.precio}</p>
                {botonElim ? <button className='btn btn-secondary border' onClick={() => eliminarProducto(producto.id)}>Eliminar</button> : <div></div>}
                
            </div>
        </div>
    )
}

export default ItemCarrrito