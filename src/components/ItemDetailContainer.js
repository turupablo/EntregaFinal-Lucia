import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where  } from "firebase/firestore"
import { db } from "../firebase"
import ItemDetail from "./ItemDetail"
import { toast } from "react-toastify"

const ItemDetailContainer = () => {

    const [load, setLoad] = useState(false)
    const [productos,setProductos] = useState([])
    const props = useParams()

    useEffect(() => {
        toast.info("Cargando producto...")
        setLoad(false)
        const pedidoFirestore = getDocs(collection(db, 'productos'))

        pedidoFirestore
            .then((respuesta) => {
                const productos = respuesta.docs.map(doc => ({ ...doc.data(), id: doc.id }))
                setProductos(productos)
                setLoad(true)
                toast.dismiss()
                toast.success("Productos cargados!")
            })
             .catch((error) => {
                   console.log(error)
            })
    }, [props.categoria])

    return (
        <>
            {load ? <ItemDetail productos={productos}/> : <div className="text-center text-warning">Cargando</div>}
        </>
    )
}

export default ItemDetailContainer