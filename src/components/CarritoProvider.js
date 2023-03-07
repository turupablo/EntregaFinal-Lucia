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
    const [botonElim,setBotonElim] = useState(false)
    const [paso,setPaso] = useState(0)
    const [datosOrden, setDatosOrden] = useState({});

    const [orden , setOrden] = useState({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        fecha: ""
    })

    const handleAtras = () => {
      if(paso > 0){
        setPaso(paso - 1)
      }
      if (paso === 0){
        window.history.back()
      }
    }
  
    const handleSiguiente = () => {
      if(paso < 2){
        setPaso(paso + 1)
      }
    }
  
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

    const vaciarCarrito = () => {
        setCarrito([])
        setTotalProductos(0)
        setTotalPrecio(0)

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
        totalPrecio,
        paso,
        handleAtras,
        handleSiguiente,
        botonElim,
        setBotonElim,
        datosOrden,
        setDatosOrden,
        setPaso
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CarritoProvider