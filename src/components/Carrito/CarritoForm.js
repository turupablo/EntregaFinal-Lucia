import React from 'react'
import { useState } from "react"
import { useCarrito, paso, orden, carrito, setPaso} from '../CarritoProvider'
import { toast } from "react-toastify"
import {db} from '../../firebase'
import { collection, serverTimestamp, addDoc } from 'firebase/firestore'



const CarritoForm = () => {
  const {handleAtras, carrito, setDatosOrden, datosOrden, setPaso, paso} = useCarrito()
  const [error, setError] = React.useState(null);


  function handleSubmit(event) {
    event.preventDefault();
    const mergeOrden ={...datosOrden, ...carrito, fecha: serverTimestamp()}
    setDatosOrden(mergeOrden)
    console.log(datosOrden)
    const ordenCollection = collection(db, "orders")
    const pedido = addDoc(ordenCollection,datosOrden)

    pedido
    .then((resultado)=>{
      console.log(resultado)
      setPaso(paso + 1)
    })
    .catch((error)=> {
      toast.error("La compra no pudo realizarse. Vuelva a intentar")
    })
  }

  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name
    if (value.includes("_")) {
      setError("You cannot use an underscore");
    } else {
      setError(null);
      setDatosOrden({...datosOrden, [name]: value});
    }
  }

  return (
    <div>

      <form onSubmit={handleSubmit} className='form-container'>
        <div>
          <p>Nombre y Apellido</p>
        </div>
        <label className='d-flex justify-content-center p-4'>
          Nombre y Apellido
          <input
            id="nombre"
            name="nombre"
            onChange={handleChange}
            value={datosOrden.nombre}
            placeholder="Nombre"
          />
          <input
            id="apellido"
            name="apellido"
            onChange={handleChange}
            value={datosOrden.apellido}
            placeholder="Apellido"
          />
        </label>
        <label className='d-flex justify-content-center p-4'>
          Telefono
          <input
            id="telefono"
            name="telefono"
            onChange={handleChange}
            value={datosOrden.telefono}
            placeholder="Telefono"
          />
        </label>
        <label className='d-flex justify-content-center p-4'>Email
          <input
            id="email"
            name="email"
            onChange={handleChange}
            value={datosOrden.email}
            placeholder="email"
          />
            <input
            id="reemail"
            name="reemail"
            onChange={handleChange}
            value={datosOrden.reemail}
            placeholder="Confirmar email"
          />
        </label>
        {error && (
          <label style={{ color: "red" }} htmlFor="message">
            {error}
          </label>
        )}
        <div className=' w-25 botones-form m-auto'>
          <button className="btn btn-secondary col border " onClick={handleAtras}>Atras</button>
          <button className="btn btn-secondary col border" type='submit' onClick={handleSubmit}>Confirmar</button>
        </div>
      </form>
    </div>
  );
}

export default CarritoForm