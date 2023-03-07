import React from 'react'
import { useCarrito , datosOrden, setBotonElim} from '../CarritoProvider'
import { Link } from "react-router-dom"
import CarritoList from './CarritoList'

const CarritoRevision = () => {
  const { datosOrden, setBotonElim } = useCarrito();
  setBotonElim(false)

  return (
    <div className='m-auto'>
          <h1 className='text-center'>Orden: {datosOrden.idOrden}</h1>
          <p className='text-center'>Nombre y Apellido: {datosOrden.nombre} {datosOrden.apellido}</p>
          <p className='text-center'>E-Mail: {datosOrden.email}</p>
          <div className="d-flex justify-content-between align-items-center">
           <Link to={"/"}> <button className="btn btn-secondary col border">Volver</button> </Link>
          </div>

    </div>
  )
}

export default CarritoRevision