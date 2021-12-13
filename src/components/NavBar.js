import React from 'react';
import logotipo from '../assets/logotipo.png'
import CartWidget from './CartWidget'

function NavBar() {
    return (
        <nav className="nav">
            <img src={logotipo} alt='logo'></img>
            <a className="nav" href= '#Home'>Inicio</a>
            <a className="nav" href= '#Tienda'>Tienda</a>
            <CartWidget/>

        </nav>

    );
        
    
}

export default NavBar; 