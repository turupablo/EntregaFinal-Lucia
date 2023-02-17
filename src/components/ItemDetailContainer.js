import {React, useEffect, useState} from 'react'
import { collection, getDoc } from "firebase/firestore"
import { db } from "../firebase"
import { useParams  } from 'react-router-dom'
import  ItemDetail  from './ItemDetail'




const ItemDetailContainer = () => {
    const params = useParams()
    const [load, setLoad] = useState(false)
    const [productos,setProductos] = useState([])


    useEffect(() => {

        const url = "https://fakestoreapi.com/products/" + params.id
        const pedido = fetch(url)
        const productosCollection = collection(db,"items")
        const pedidoFirestore = getDoc (productosCollection)
        console.log(url)

        pedidoFirestore
            .then(()=>{}



            )
            .catch((error) => {
                console.log(error)
            })

        pedido
            .then((respuesta) => {
                const productos = respuesta.json()
                return productos

            })
            .then((productos) => {
                setProductos(productos)
                setLoad(true)
            })
            .catch((error) => {
                console.log(error)
            })

    }, [])

    return (
        <>
            {load ? null : <div className="text-center text-warning">Cargando</div>}
            <ItemDetail productos={productos}/>
        </>
    )
}

export default ItemDetailContainer
