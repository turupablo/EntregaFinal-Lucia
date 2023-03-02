import {React} from "react"
import { Link } from "react-router-dom"
import { useCarrito } from './CarritoProvider'
import ItemCount from './ItemCount';
import Rate from './Rate'
import { Rating } from 'react-simple-star-rating'



const Item = ({ producto }) => {
    const {agregarProducto} = useCarrito()
    const onAdd = (cantidad) => {
        agregarProducto(producto,cantidad)
    }

    return (
        <article key={producto.id} className="col product-card">
            <div className="pt-5 pb-5">
                <div className="card shadow bg-body rounded text-center carta-contenedor ">
                    <h6 className="product-card__title">{producto.titulo}</h6>
                    <Rating allowHover={false} size={15} allowFraction={true} readonly={true} initialValue={producto.rating.valoracion}/>
                    <div className="imagen-conedor">
                        <img className="product-card__image img-fluid border-secondary imagen-tarjeta" src={`${producto.imagen}`} alt={producto.titulo} />
                    </div>
                    <p className="text-secondary precio">${producto.precio}</p>
                    <Link to={"/item/"+producto.id}> <button className="btn btn-secondary ">Mas</button> </Link>
                    <ItemCount stock={producto.stock} onAdd={onAdd} />
                </div>
            </div>
        </article>
    )
}

export default Item