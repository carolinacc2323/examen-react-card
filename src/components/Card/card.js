import React from 'react'
import './card.css'
import { GatsbyImage } from 'gatsby-plugin-image';

const Card = ({ image, footphoto, title, description }) => {
    return (
    <>
        <div className='card'>
            <figure>
                <GatsbyImage image={image} alt={footphoto}/>
            </figure>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    </>
    )
}


export default Card
