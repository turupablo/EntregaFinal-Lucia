import React from 'react'
import { useCarrito } from '../CarritoProvider'
import ItemCart from './ItemCarrito'
import { toast } from "react-toastify"

const CarritoList = () => {
  const { carrito, totalPrecio } = useCarrito();


  return (

		<>
			{carrito.map((producto) => (
				<ItemCart key={producto.id} product={producto} />
			))}
		</>

  )
}

export default CarritoList