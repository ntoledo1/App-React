import React from "react";


const Item ={
  Button: (props)=>(<button onClick={props.click}>Agregar</button>),
  Title: ({text, estilo})=>(<p className={estilo}>{text}</p>),
  Item: (props)=>(
    <div>
      <h1>{props.titulo}</h1>
      <p>{props.img}</p>
      <p>{props.descripcion}</p>
      <p>{props.precio}</p>
    </div>),
}
  
      
   export default Item;
