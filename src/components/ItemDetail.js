import React from 'react'

const ItemDetail = ({ productos }) => {
  

  const { titulo, precio, categoria, descripcion, imagen} = productos

  return (
    <div>
      <h1>{titulo}</h1>
      <p>{descripcion}</p>
      <p>{categoria}</p>
      <p>{precio}</p>
      <img className="product-card__image img-fluid border-secondary imagen-tarjeta" src={`${imagen}`} alt={titulo} />



    </div>
  )
}

export default ItemDetail