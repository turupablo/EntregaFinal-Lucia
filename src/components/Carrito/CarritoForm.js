import React from 'react'
import { useState ,useEffect} from "react"
import { useCarrito, paso, orden, carrito, setPaso, vaciarCarrito} from '../CarritoProvider'
import { toast } from "react-toastify"
import {db} from '../../firebase'
import { collection, serverTimestamp, addDoc } from 'firebase/firestore'




const CarritoForm = () => {
  const {handleAtras, carrito, setDatosOrden, datosOrden, setPaso, paso, vaciarCarrito} = useCarrito()
  const [error, setError] = useState(null);
  const [avance, setAvance] = useState(paso)
  const [habilitadoNombre, setHabilitadoNombre] = useState(false)
  const [habilitadoEmail, setHabilitadoEmail] = useState(false)
  const [habilitadoReEmail, setHabilitadoReEmail] = useState(false)


    function handleSubmit(event) {
      event.preventDefault();
      if ( habilitadoEmail && habilitadoNombre && habilitadoReEmail ) {
        const mergeOrden ={...datosOrden, ...carrito, fecha: serverTimestamp()}
        setDatosOrden(mergeOrden)
        const docRef = addDoc(collection(db, "orders"), datosOrden);
        docRef
        .then((res) => {
              toast.success("Compra realizada. Orden: " + res.id)
              setPaso(paso + 1)
              setDatosOrden({...mergeOrden, idOrden: res.id})
              vaciarCarrito()
        })
        .catch((error) => {
          toast.error("La compra no pudo realizarse. Vuelva a intentar" + error.code)
        })
      } else {
        setError("Complete los datos");
      }
  }


  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name
    if (value.includes("_")) {
      setError("Sin caracteres especiales");
    } else {
      setError(null);
      setDatosOrden({...datosOrden, [name]: value});
    }
    if (value !== '') {
      setHabilitadoNombre(true)
    } else {
      setHabilitadoNombre(false)
    }
  }
  function handleChangeEmail(event) {
    const value = event.target.value;
    const name = event.target.name
    if (value.includes("@")) {
      setError(null);
      setDatosOrden({...datosOrden, [name]: value});
      if (value !== '') {
        setHabilitadoEmail(true)
      } else {
        setHabilitadoEmail(false)
      }
    } else {
      setError("No tiene formato de email");
      setDatosOrden({...datosOrden, [name]: value});
    }
  }
  function handleChangeReEmail(event) {
    const value = event.target.value;
    const name = event.target.name
    if (value.match(datosOrden.email)) {
      setError(null);
      setDatosOrden({...datosOrden, [name]: value});
      if (value !== '') {
        setHabilitadoReEmail(true)
      } else {
        setHabilitadoReEmail(false)
      }
    } else {
      setError("No coinciden los eMails");
      setDatosOrden({...datosOrden, [name]: value});
    }
  }


  return (
    <div>

      <form onSubmit={handleSubmit} className='form-container'>
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
            onChange={handleChangeEmail}
            value={datosOrden.email}
            placeholder="email"
          />
            <input
            id="reemail"
            name="reemail"
            onChange={handleChangeReEmail}
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