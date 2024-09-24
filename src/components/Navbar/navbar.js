import React from 'react'
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <>
        <nav className='navbar'>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar
