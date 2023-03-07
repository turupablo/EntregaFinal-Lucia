import React from 'react'
import Rate from './Rate'
import { useCarrito } from './CarritoProvider'
import ItemCount from './ItemCount';


  const ItemDetail = ({ productos }) => {
  

  const {agregarProducto} = useCarrito()
    const onAdd = (cantidad) => {
        agregarProducto(productos,cantidad)
    }

  
  const { titulo, precio, categoria, descripcion, imagen , rating, stock} = productos
  const handleAtras = () => {
    window.history.back()
  }

  return (
    <div className='border p-5 container text-center '>
      <h1 className='product-card__title'>{titulo}</h1>
      <p>{descripcion}</p>
      <img className="imagen-detail" src={`${imagen}`} alt={titulo} />
      <Rate valoracion={rating.valoracion} contador={rating.contador}></Rate>
      <p className='text-secondary precio'>${precio}</p>
      <p className='stock-texto'>Stock: {stock}</p>
      <ItemCount stock={productos.stock} onAdd={onAdd} />
      <button className='btn btn-secondary m-1' onClick={handleAtras}>Atras</button>
    </div>
  )
}

export default ItemDetail