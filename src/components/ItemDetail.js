import React from 'react'
import Rate from './Rate'


  const ItemDetail = ({ productos }) => {
  
  
  const { titulo, precio, categoria, descripcion, imagen , rating} = productos


  return (
    <div className='border p-5 container text-center '>
      <h1 className='product-card__title'>{titulo}</h1>
      <p>{descripcion}</p>
      <img className="imagen-detail" src={`${imagen}`} alt={titulo} />
      <Rate valoracion={rating.valoracion} contador={rating.contador}></Rate>
      <p className='text-secondary precio'>${precio}</p>

      <input type="button" onclick="history.back()" name="Atras" value="Atras"></input>




    </div>
  )
}

export default ItemDetail