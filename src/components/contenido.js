// Importamos la clase React de la librería 'react'
import React from 'react';


// Creamos el componente de clase "Contenido" que hereda de la clase
// React.Component, y tiene un método render que devuelve...
class Contenido extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            titulo: "Unidad 3, Actividad 5 - Eventos en React, Ejercicio 6",
            imagen: ["./imagenes/MachuPicchu.jfif", "./imagenes/quechuas.jfif", "./imagenes/Titicaca.jfif"],
            texto1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur lorem donec massa sapien faucibus et. Eros in cursus turpis massa tincidunt dui ut. Id diam maecenas ultricies mi. Dignissim diam quis enim lobortis scelerisque. Eu volutpat odio facilisis mauris sit. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Quis risus sed vulputate odio ut enim blandit. Nunc mattis enim ut tellus elementum sagittis vitae et. Amet luctus venenatis lectus magna fringilla urna. Ultricies integer quis auctor elit sed vulputate. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Integer eget aliquet nibh praesent tristique magna sit amet purus. Urna neque viverra justo nec ultrices. Aliquet nibh praesent tristique magna.",
            texto2: "Eros in cursus turpis massa tincidunt dui ut. Id diam maecenas ultricies mi. Dignissim diam quis enim lobortis scelerisque. Eu volutpat odio facilisis mauris sit.",
            texto3: "Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Quis risus sed vulputate odio ut enim blandit. Nunc mattis enim ut tellus elementum sagittis vitae et.",
            texto4: "Amet luctus venenatis lectus magna fringilla urna. Ultricies integer quis auctor elit sed vulputate. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis.",
            texto5: "Integer eget aliquet nibh praesent tristique magna sit amet purus. Urna neque viverra justo nec ultrices. Aliquet nibh praesent tristique magna."
        };
        this.handleClick = this.handleClick.bind(this);
        this.cambiarEstilo = this.cambiarEstilo.bind(this);
        this.cambiarTexto = this.cambiarTexto.bind(this);
        this.handleOver = this.handleOver.bind(this)
        this.handleOut = this.handleOut.bind(this)
    }

    handleClick(event){
        event.preventDefault();
        event.target.style.color="red";
        event.target.style.backgroundColor="black";
    }

    cambiarEstilo(event){  
        this.state.texto1.length<300 ? event.target.style.fontSize = "30px" : event.target.style.textDecoration = "underline";

        // if(this.state.texto1.length<300){
        //     event.target.style.fontSize = "30px";
        // } else {
        //     event.target.style.textDecoration = "underline";
        // }
    }

    cambiarTexto(event){
        let numId = event.target.id;
        if(numId=="2"){
            this.setState({ texto2: "" });
        } else if(numId=="3"){
            this.setState({ texto3: "" });
        } else if(numId=="4"){
            this.setState({ texto4: "" });
        } else if(numId=="5"){
            this.setState({ texto5: "" });
        }
    }

    handleOver(event){
        let numId =event.target.id;
        if(numId==="1"){
            event.target.style.backgroundColor="blue";
        } else if(numId==="2"){
            event.target.style.backgroundColor="orange";
        } else if(numId==="3"){
            event.target.style.backgroundColor="green";
        } else if(numId==="4"){
            event.target.style.backgroundColor="yellow";
        } else if(numId==="5"){
            event.target.style.backgroundColor="red";
        }
    }

    handleOut(event){
        event.target.style.backgroundColor="white";
    }

    render() {
        return (
            <div className='stDiv'>
                <h1 onClick={this.handleClick}>{this.state.titulo}</h1>
                <img src={require("./imagenes/MachuPicchu.jfif").default} alt="Machu Picchu"/><br/>
                <input type="button" onClick={this.verImagenAnterior} value="Ver anterior"/> 
                <input type="button" onClick={this.verImagenSiguiente} value="Ver siguiente"/>
                <p id="1" onClick={this.cambiarEstilo} onMouseOver={this.handleOver} onMouseOut={this.handleOut}>{this.state.texto1}</p>
                <p id="2" onClick={this.cambiarTexto} onMouseOver={this.handleOver} onMouseOut={this.handleOut}>{this.state.texto2}</p>
                <p id="3" onClick={this.cambiarTexto} onMouseOver={this.handleOver} onMouseOut={this.handleOut}>{this.state.texto3}</p>
                <p id="4" onClick={this.cambiarTexto} onMouseOver={this.handleOver} onMouseOut={this.handleOut}>{this.state.texto4}</p>
                <p id="5" onClick={this.cambiarTexto} onMouseOver={this.handleOver} onMouseOut={this.handleOut}>{this.state.texto5}</p>
            </div>
        );
    }
}


// Exportamos por defecto el contenido de clase "Contenido"
export default Contenido;