import { createContext, useContext, useState  } from 'react'

const contexto = createContext()
const Provider = contexto.Provider


export const useCarrito = () => {
    const valorDelContexto = useContext(contexto)
    return valorDelContexto
}

const CarritoProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [totalProductos, setTotalProductos] = useState(0)


    const agregarProducto = (producto, cantidad) => {
       
        //const copia = []
        //carrito.forEach(p=>copia.push(p))
        
       /*  const copia = [ ...arr ]
        copia.push(producto) */
        //setCarrito(copia)

        //setCarrito()
    }

    const eliminarProducto = (id) => setCarrito(carrito.filter(producto => producto.id !== id))

    //const modifcarCantidad = () => {}

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const estaEnCarrito = (id) => {
        return carrito.find(producto => producto.id === id) ? true : false
    }

 


    const valorDelContexto = {
        carrito,
        totalProductos,
        setCarrito,
        setTotalProductos,
        estaEnCarrito,
        vaciarCarrito,
        eliminarProducto,
        agregarProducto
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CarritoProvider