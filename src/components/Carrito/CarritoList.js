import React from 'react'
import { useCarrito } from '../CarritoProvider'
import ItemCarrrito from './ItemCarrito'


const CarritoList = () => {
  const { carrito , totalPrecio} = useCarrito();


  return (

		<>
			{carrito.map((producto) => (
				<ItemCarrrito key={producto.id} producto={producto} />
			))}
      <p className='text-center'>Total: {totalPrecio}</p>
		</>

  )
}

export default CarritoList