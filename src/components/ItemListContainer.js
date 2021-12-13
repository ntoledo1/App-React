import React from "react";

function ItemListContainer (props){
        return(
        <div className="barilo">
            <h1>Proximamente tienda Disponible!</h1>
            <h2>Estamos en construccion </h2>
         
            proximamente {props.greeting}
        </div>
    )
}

export default ItemListContainer;