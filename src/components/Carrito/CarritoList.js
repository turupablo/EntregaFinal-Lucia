import React from 'react'
import { useCarrito, paso, handleAtras, handleSiguiente, setBotonElim} from '../CarritoProvider'
import ItemCarrrito from './ItemCarrito'



const CarritoList = () => {
  const { carrito , totalPrecio, handleAtras, handleSiguiente, setBotonElim} = useCarrito();
  setBotonElim(true)

  return (

		<>
			{carrito.map((producto) => (
				<ItemCarrrito key={producto.id} producto={producto} />
			))}
      <p className='text-center'>Total: ${totalPrecio}</p>
	    <div className=' w-25 botones-form m-auto'>
          <button className="btn btn-secondary col border " onClick={handleAtras}>Atras</button>
          <button className="btn btn-secondary col border " onClick={handleSiguiente}>Siguiente</button>
      </div>
		</>

  )
}

export default CarritoList