import React, { Component } from "react";
import Item from "./Item";

class ItemList extends Component {
    constructor(props){
      super();
      this.state ={
          name: 'Mi tienda Hindu',
          arr: [{titulo:"Vestido Mykonos" , img: "img" ,descripcion: "gasa" , precio: 2000}, {titulo:"Vestido Olimpia" , img: "img" ,descripcion: "Encaje color crudo" , precio: 5000}, {titulo:"Vestido Indonesia" , img: "img" ,descripcion: "Algodon Blanco" , precio: 6000}]
      }
      this.auxText = "prueba"
    }

    promiseMetodo = () =>{
        const prom = new Promise ((resolve, reject)=>{

            setTimeout(()=>{
                resolve ("Titulo")
            }, 3000);
        })
       /*prom.then((res)=>{
           console.log(res)
       })*/
    

       const test = async ()=>{
            const pro = await prom()
            return pro
        }
        return test()
    }

handeClick = (params)=>{
this.setState({click:2})
console.log(this.promiseMetodo())
console.log (this.state)
console.log (this.auxText)
}

render(){
    return(
        <>
        {this.state.arr.map((el)=>{
            return <Item.Item titulo={el.titulo} img={el.img} descripcion={el.descripcion} precio={el.precio}></Item.Item>
        })};    
        <Item.Title text={this.state.click}></Item.Title>
        <Item.Title text={this.state.name}></Item.Title>
        <Item.Button click = {this.handeClick}>ADIOS</Item.Button>
    
       </>
    );
}
}

export default ItemList;