import React from 'react'
import { Stepper } from 'react-form-stepper';
import { useState } from "react"


const Checkout = () => {
  const [paso,setPaso] = useState(0)

  const handleAtras = () => {
    if(paso > 0){
      setPaso(paso - 1)
    }
  }

  const handleSiguiente = () => {
    if(paso < 2){
      setPaso(paso + 1)
    }
  }


  return (
    
    <div>
          <Stepper
            steps={[{ label: 'Revision' },  { label: 'Datos Personales' }, { label: 'Finalizar' }]}
            activeStep={paso}
            styleConfig={{
              activeBgColor: '#17a2b8',
              activeTextColor: '#fff',
              inactiveBgColor: '#fff',
              inactiveTextColor: '#6c757d',
              completedBgColor: '#343a40',
              completedTextColor: '#6c757d',
              size: '3em'
            }}
          />





          <div className=' w-25 botones-form'>
            <button className="btn btn-secondary col border " onClick={handleAtras}>Atras</button>
            <button className="btn btn-secondary col border " onClick={handleSiguiente}>Siguiente</button>
          </div>


          








    </div>
  )
}

export default Checkout