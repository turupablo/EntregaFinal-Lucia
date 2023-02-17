import React from 'react'

const ItemDetail = ({ productos }) => {
  
  const id = productos.id
  const title = productos.title
  const price = productos.price
  const category = productos.category
  const description = productos.description
  const image = productos.image

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{category}</p>
      <p>{price}</p>



    </div>
  )
}

export default ItemDetail