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
    const [totalPrecio, setTotalPrecio] = useState(0)


    const agregarProducto = (producto, nuevaCantidad) => {
        if (estaEnCarrito(producto.id)) {
            setCarrito(carrito.map(prod => {
                return prod.id === producto.id ? {...prod, cantidad: prod.cantidad + nuevaCantidad} : prod
            }))
        } else {
            setCarrito([...carrito, {...producto, nuevaCantidad}])
        }
        console.log(carrito)
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
        agregarProducto,
        totalPrecio
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CarritoProvider