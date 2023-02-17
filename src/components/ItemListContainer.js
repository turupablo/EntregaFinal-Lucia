import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDoc  } from "firebase/firestore"
import { db } from "../firebase"
import ItemList from "./ItemList"

const ItemListContainer = () => {

    const [load, setLoad] = useState(false)
    const [productos,setProductos] = useState([])

    const props = useParams()
    console.log(props)


    useEffect(() => {

        setLoad(false)
        const pedido = fetch("https://fakestoreapi.com/products/")
        const productosCollection = collection(db,"items")
        const pedidoFirestore = getDoc (productosCollection)


        pedidoFirestore
            .then((respuesta) => {
                const productos = respuesta.docs.map(doc => ({ ...doc.data(), id: doc.id}))
            })
            .then((productos) => {
                if (props.categoria == null) {
                    setProductos(productos)
                } else {
                    setProductos(productos.filter(p => p.category === props.categoria))
                }
            setLoad(true)
            console.log(productos)

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