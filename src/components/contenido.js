// Importamos la clase React de la librería 'react'
import React from 'react';


// Creamos el componente de clase "Contenido" que hereda de la clase
// React.Component, y tiene un método render que devuelve...
class Contenido extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            titulo: "Actividades: Eventos React",
            texto1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur lorem donec massa sapien faucibus et. Eros in cursus turpis massa tincidunt dui ut. Id diam maecenas ultricies mi. Dignissim diam quis enim lobortis scelerisque. Eu volutpat odio facilisis mauris sit. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Quis risus sed vulputate odio ut enim blandit. Nunc mattis enim ut tellus elementum sagittis vitae et. Amet luctus venenatis lectus magna fringilla urna. Ultricies integer quis auctor elit sed vulputate. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Integer eget aliquet nibh praesent tristique magna sit amet purus. Urna neque viverra justo nec ultrices. Aliquet nibh praesent tristique magna.",
            texto2: "Eros in cursus turpis massa tincidunt dui ut. Id diam maecenas ultricies mi. Dignissim diam quis enim lobortis scelerisque. Eu volutpat odio facilisis mauris sit.",
            texto3: "Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Quis risus sed vulputate odio ut enim blandit. Nunc mattis enim ut tellus elementum sagittis vitae et.",
            texto4: "Amet luctus venenatis lectus magna fringilla urna. Ultricies integer quis auctor elit sed vulputate. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis.",
            texto5: "Integer eget aliquet nibh praesent tristique magna sit amet purus. Urna neque viverra justo nec ultrices. Aliquet nibh praesent tristique magna."
        };
        this.handleClick = this.handleClick.bind(this);
        this.cambiarEstilo = this.cambiarEstilo.bind(this);
        this.cambiarTexto = this.cambiarTexto.bind(this)
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


    render() {
        return (
            <div className='stDiv'>
                <h1 onClick={this.handleClick}>{this.state.titulo}</h1>                
                <p id="1" onClick={this.cambiarEstilo}>{this.state.texto1}</p>
                <p id="2" onClick={this.cambiarTexto}>{this.state.texto2}</p>
                <p id="3" onClick={this.cambiarTexto}>{this.state.texto3}</p>
                <p id="4" onClick={this.cambiarTexto}>{this.state.texto4}</p>
                <p id="5" onClick={this.cambiarTexto}>{this.state.texto5}</p>
            </div>
        );
    }
}


// Exportamos por defecto el contenido de clase "Contenido"
export default Contenido;