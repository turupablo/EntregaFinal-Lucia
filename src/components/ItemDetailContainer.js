import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDoc, doc } from "firebase/firestore"
import { db } from "../firebase"
import ItemDetail from "./ItemDetail"
import { toast } from "react-toastify"

const ItemDetailContainer = () => {

    const [load, setLoad] = useState(false)
    const [producto,setProducto] = useState({})
    const { id } = useParams()

    useEffect(() => {
        toast.info("Cargando producto...")
        setLoad(false)



       const productosCollection = collection(db, "productos")
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
                console.log(error)
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