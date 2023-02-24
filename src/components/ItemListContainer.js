import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where  } from "firebase/firestore"
import { db } from "../firebase"
import ItemList from "./ItemList"
import { toast } from "react-toastify"

const ItemListContainer = () => {

    const [load, setLoad] = useState(false)
    const [productos,setProductos] = useState([])

    const {categoria} = useParams()


    useEffect(() => {
        toast.info("Cargando producto...")
        setLoad(false)
        const colleccionProductos = collection(db, "productos");
        let filtro = query(colleccionProductos);
        if (categoria) {
            filtro = query(colleccionProductos,where("categoria","==",categoria));
        }
        const colleccionesRequeridas = getDocs(filtro);

        colleccionesRequeridas
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

    }, [categoria])

    return (
        <>
            {load ? <ItemList productos={productos}/> : <div className="text-center text-warning">Cargando</div>}
            
        </>
    )
}


export default ItemListContainer