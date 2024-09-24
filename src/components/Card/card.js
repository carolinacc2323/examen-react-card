import React from 'react'
import './card.css'
const Card = () => {
    return (
    <>
        <div className='card'>
            <figure>
                <img src='https://i.pinimg.com/736x/13/f8/72/13f872bc36e1bd96d0720539ee6290ec.jpg'/>
                <figcaption>Pie de foto</figcaption>
            </figure>
            <h2>Título</h2>
            <p>Descripción</p>
        </div>

    </>
    )
}

export default Card
