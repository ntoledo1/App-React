import React from 'react';
import CartWidget from './CartWidget'

function NavBar() {
    return (
        <nav className="nav">
            <a className="nav" href= '#Home'>Inicio</a>
            <a className="nav" href= '#Tienda'>Tienda</a>
            <CartWidget/>

        </nav>

    );
        
    
}
export default NavBar; 