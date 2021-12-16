import React, {useState} from "react";

function ItemCount ({stock, initial, onAdd}){
 
let [cantidad, setCantidad] = useState(initial);

const handeClickSumar=()=>{
    if (cantidad < stock && stock !==0){setCantidad(cantidad +1);}}

const handeClickResta=()=>{
    if (cantidad > 0) {setCantidad(cantidad -1)}}

function restablecer(){
  setCantidad(0)}

return (
    <div>
      <p>cantidad de Stock:{cantidad}</p>
    <button onClick = {handeClickSumar}> Sumar </button>
    <button onClick = {handeClickResta}> Restar </button>
    <button onClick = {restablecer}> Restablecer </button>
    <button onClick = {onAdd}> Agregar </button>
    </div>
)
}


export default ItemCount;