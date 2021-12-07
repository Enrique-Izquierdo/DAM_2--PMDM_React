// Importamos la clase React de la librería 'react'
import React from 'react';


// Creamos el componente de clase "Contenido" que hereda de la clase
// React.Component, y tiene un método render que devuelve...
class Contenido extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            titulo: "Actividades: Eventos React",
            texto1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur lorem donec massa sapien faucibus et. ",
            texto2: "Eros in cursus turpis massa tincidunt dui ut. Id diam maecenas ultricies mi. Dignissim diam quis enim lobortis scelerisque. Eu volutpat odio facilisis mauris sit.",
            texto3: "Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Quis risus sed vulputate odio ut enim blandit. Nunc mattis enim ut tellus elementum sagittis vitae et.",
            texto4: "Amet luctus venenatis lectus magna fringilla urna. Ultricies integer quis auctor elit sed vulputate. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis.",
            texto5: "Integer eget aliquet nibh praesent tristique magna sit amet purus. Urna neque viverra justo nec ultrices. Aliquet nibh praesent tristique magna."
        };
        this.handleClick = this.handleClick.bind(this);
        this.cambiarTexto1 = this.cambiarTexto1.bind(this);
        this.cambiarTexto2 = this.cambiarTexto2.bind(this);
        this.cambiarTexto3 = this.cambiarTexto3.bind(this);
        this.cambiarTexto4 = this.cambiarTexto4.bind(this);
        this.cambiarTexto5 = this.cambiarTexto5.bind(this)
    }

    handleClick(event){
        event.preventDefault();
        event.target.style.color="red";
        event.target.style.backgroundColor="black";
    }

    cambiarTexto1(){        
        this.setState({ texto1: "" });        
    }

    cambiarTexto2(){
        this.setState({ texto2: ""});
    }

    cambiarTexto3(){
        this.setState({ texto3: ""});
    }

    cambiarTexto4(){
        this.setState({ texto4: ""});
    }

    cambiarTexto5(){
        this.setState({ texto5: ""});
    }

    render() {
        return (
            <div className='stDiv'>
                <h1 onClick={this.handleClick}>{this.state.titulo}</h1>                
                <p onClick={this.cambiarTexto1}>{this.state.texto1}</p>
                <p onClick={this.cambiarTexto2}>{this.state.texto2}</p>
                <p onClick={this.cambiarTexto3}>{this.state.texto3}</p>
                <p onClick={this.cambiarTexto4}>{this.state.texto4}</p>
                <p onClick={this.cambiarTexto5}>{this.state.texto5}</p>
            </div>
        );
    }
}


// Exportamos por defecto el contenido de clase "Contenido"
export default Contenido;