import React from 'react'
import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'


const Rate = (props) => {

    const { contador, valoracion} = props

    const [rate, setRating] = useState(0)
    const handleRating = (rate: number) => {
        setRating(rate)
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
                <p className='rating-texto'>Opiniones: {contador}</p>
                <p className='rating-texto'>Rating: {valoracion}</p>
            </div>
            <div className='col'>
                <Rating onClick={handleRating} allowHover={false} initialValue={valoracion}/>
            </div>

        </div>
    </div>
  )
}

export default Rate




