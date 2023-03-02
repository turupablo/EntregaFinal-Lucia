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


    const agregarProducto = (productoCar, nuevaCantidad) => {
        const carritoPrecio = productoCar.precio

        if (estaEnCarrito(productoCar.id)) {
            setCarrito(carrito.map(prod => {
                return prod.id === productoCar.id ? {...prod, cantidad: prod.cantidad + nuevaCantidad} : prod
            }))
        } else {
            setCarrito([...carrito, {...productoCar, cantidad: nuevaCantidad}])
        }
        setTotalPrecio(totalPrecio + (carritoPrecio * nuevaCantidad))
        setTotalProductos(totalProductos + nuevaCantidad)

    }

    const eliminarProducto = (id) => {
        const carritoCantidad = carrito.find(producto => producto.id === id).cantidad
        const carritoPrecio = carrito.find(producto => producto.id === id).precio
        setTotalProductos(totalProductos - carritoCantidad)
        setTotalPrecio(totalPrecio - (carritoCantidad*carritoPrecio))
        setCarrito(carrito.filter(producto => producto.id !== id))
    }

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