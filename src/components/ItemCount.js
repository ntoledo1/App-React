import React, {useState} from "react";

function ItemCount (){
let [cantidad, setCantidad] = useState({Click:0})
const handeClickSumar=()=>{
    setCantidad({ Click: ++cantidad.Click});
  };
const handeClickResta=()=>{
    setCantidad({ Click: --cantidad.Click});
  }; 
return (
    <div>
    <button onClick = {handeClickSumar} >Sumar </button>
    <p>0{cantidad.Click}</p>
    <button onClick = {handeClickResta}>Restar </button>
    </div>
)
}
/*
function ItemCount ([stock, initial, onAdd]){
return (
    <div>
    <button>Sumar </button>
    <p>0</p>
    <button>Restar </button>
    </div>
    <ItemCount stock="5" initial="1" />
)//desarrollo de logica
}*/

export default ItemCount;