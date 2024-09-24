import React from 'react';
import './card.css';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const Card = ({ image, title, description, link}) => {
    return (
    <>
        <div className='card' >
            <h2>{title}</h2>
            <figure>
                <GatsbyImage image={image} />
            </figure>
            <p>{description}</p>
            <button><Link to={link} >Más info</Link></button>
        </div>
    </>
    )
}

export default Card
