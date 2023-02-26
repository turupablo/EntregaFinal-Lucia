import { useState } from "react"
import cart from '../assets/cart.svg'

const ItemCount = ({stock , onAdd }) => {

  const [contador, setContador] = useState(1)
  //const {carrito} = useContext(contexto)

  const handleSumar = () => {
    if(contador < stock){
      setContador(contador + 1)
    }
  }

  const handleRestar = () => {
    if ( contador > 0){
      setContador(contador - 1)
    }
    
  }

  const handleConfirmar = () => {
    onAdd(contador)
  }


  return (
    <div>
      <div className="row">
        <button className="col p-1 boton-count bg-secondary" onClick={handleRestar}>-</button>
        <p className="col p-1">{contador}</p>
        <button className="col p-1 boton-count bg-secondary" onClick={handleSumar}>+</button>
      </div>
      <button className="btn btn-secondary mt-1"><img src={cart} width="20" height="20" className="d-inline-block align-top" alt=""/> Agregar</button>
    </div>
  )
}

export default ItemCount