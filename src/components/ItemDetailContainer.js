import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDoc, doc } from "firebase/firestore"
import { db } from "../firebase"
import ItemDetail from "./ItemDetail"
import { toast } from "react-toastify"
import { setPaso , paso, useCarrito} from './CarritoProvider';

const ItemDetailContainer = () => {

    const [load, setLoad] = useState(false)
    const [producto,setProducto] = useState({})
    const { id } = useParams()
    const {paso ,setPaso} = useCarrito();

    useEffect(() => {
        toast.info("Cargando producto...")
        setLoad(false)
        if ( paso === 2 ) {
            setPaso(0)
        }


       const productosCollection = collection(db, "items")
       const referencia = doc(productosCollection, id)
       const pedido = getDoc(referencia)

   
        pedido
            .then((respuesta) => {
                const producto = respuesta.data()
                setProducto(producto)
                toast.dismiss()
                toast.success("Producto cargado!")
                setLoad(true)
            })
            .catch((error) => {
                toast.dismiss()
                toast.error("Hubo un error, vuelva a intentarlo!")
            })
    },[])

    return (
        <>
            {load ? <ItemDetail productos={producto}/> : <div className="text-center text-warning">Cargando</div>}
        </>
    )
}

export default ItemDetailContainer