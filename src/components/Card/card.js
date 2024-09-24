import React from 'react';
import './card.css';
import { GatsbyImage } from 'gatsby-plugin-image';

const Card = ({ image, title, description, link}) => {
    return (
    <>
        <div className='card'>
            <h2>{title}</h2>
            <figure>
                <GatsbyImage image={image} />
            </figure>
            <p>{description}</p>
            <button href={link}>Más info</button>
        </div>
    </>
    )
}

export default Card
