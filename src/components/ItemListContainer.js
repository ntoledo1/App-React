import React from "react";
import ItemList from "./ItemList"
function ItemListContainer (props){
        return(
        <div className="barilo">
            <h1>Proximamente tienda Disponible!</h1>
            <h2>Estamos en construccion </h2>
         <ItemList/>
            proximamente {props.greeting}
        </div>
    )
}

export default ItemListContainer;