import React from 'react'
import { Stepper } from 'react-form-stepper';
import CarritoForm from './Carrito/CarritoForm';
import CarritoList from './Carrito/CarritoList';
import CarritoRevision from './Carrito/CarritoRevision';
import { useCarrito , paso} from './CarritoProvider';

const Checkout = () => {
  const {paso} = useCarrito();

  return (
    <div>
          <Stepper
            steps={[{ label: 'Revision' },  { label: 'Datos Personales y Confirmacion' }, { label: 'Detalle Orden' }]}
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
            {paso === 0 && <CarritoList/>}
            {paso === 1 && <CarritoForm />}
            {paso === 2 && <CarritoRevision/>}
    </div>
  )
}

export default Checkout