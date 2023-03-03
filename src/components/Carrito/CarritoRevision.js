import React from 'react'
import { useCarrito, paso , orden, setBotonElim} from '../CarritoProvider'
import { Link } from "react-router-dom"
import CarritoList from './CarritoList'

const CarritoRevision = () => {
  const { orden, setBotonElim } = useCarrito();
  setBotonElim(false)

  return (
    <div>
            <h1>Orden: {orden.id}</h1>
            <p>Nombre: {orden.nombre}</p>
            <p>Apellido: {orden.apellido}</p>
            <p>Fecha: {orden.fecha}</p>
            
      
            <Link to={"/"}> <button className="btn btn-secondary col border">Volver</button> </Link>
    </div>
  )
}

export default CarritoRevision