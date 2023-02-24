import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where  } from "firebase/firestore"
import { db } from "../firebase"
import ItemList from "./ItemList"
import { toast } from "react-toastify"

const ItemListContainer = () => {

    const [load, setLoad] = useState(false)
    const [productos,setProductos] = useState([])

    const props = useParams()


    useEffect(() => {
        toast.info("Cargando producto...")
        setLoad(false)
      //const pedido = fetch("https://fakestoreapi.com/products/")
      //  const productosCollection = collection(db,"items")
      //  console.log(productosCollection)
      //  const pedidoFirestore = getDoc (productosCollection)


        //const productosCollection = collection(db, "items") //CollectionReference/Query
        //console.log(productos)

        //getDocs(Query)
        //query(Query,Constraint)
        //where(propieda,operador,valor)

        //const filtro = query(productosCollection,where("categoria","==","Camisetas"))
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
            {load ? <ItemList productos={productos}/> : <div className="text-center text-warning">Cargando</div>}
            
        </>
    )
}


export default ItemListContainer