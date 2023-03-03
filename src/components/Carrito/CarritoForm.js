import React from 'react'
import { useState } from "react"
 import { useCarrito, paso, orden} from '../CarritoProvider'
 import { toast } from "react-toastify"


const CarritoForm = () => {
  const [habilitado , setHabilitado] = useState(false)
  const { carrito , orden, setOrden, handleAtras, handleSiguiente} = useCarrito();




  const handleSubmit = (e) => {
    e.preventDefault()
    if (habilitado){
      handleSiguiente()
    } else {
      toast.info("Llenar todos los datos")
    }

  }
  const handleCambio = (e) => {
    const { campo , valor} = e.target
      setOrden({
        ...orden,
        [campo]: valor
      })
      console.log(orden)
  }



  return (
    <div>
      <form className='form-container'>
        <div className='d-flex justify-content-center p-4'>
          <label>
            Nombre
            <input placeholder='Nombre' type="text" onChange={handleCambio}  ></input>
          </label>
          <label>
            Apellido
            <input placeholder='Apellido' onChange={handleCambio}></input>
          </label>
        </div>
        <div className='d-flex justify-content-center p-4'>
          <label>
            Correo
            <input placeholder='eMail' ></input>
            <input placeholder='Confirme Email'></input>
          </label>
        </div>
        <div className='d-flex justify-content-center p-4'>
          <label>
            Telefono
            <input placeholder='Telefono' ></input>
          </label>
        </div>
        <div className=' w-25 botones-form m-auto'>
          <button className="btn btn-secondary col border " onClick={handleAtras}>Atras</button>
          <button className="btn btn-secondary col border" type='submit' onClick={handleSubmit}>Confirmar</button>
        </div>

      </form>


    </div>
  )
}

export default CarritoForm