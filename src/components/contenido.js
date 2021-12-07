// Importamos la clase React de la librería 'react'
import React from 'react';


// Creamos el componente de clase "Contenido" que hereda de la clase
// React.Component, y tiene un método render que devuelve...
class Contenido extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            titulo: "Actividades: Eventos React",
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur lorem donec massa sapien faucibus et. "
        };
        this.handleClick = this.handleClick.bind(this);
        this.cambiarTexto = this.cambiarTexto.bind(this)
    }

    handleClick(event){
        event.preventDefault();
        event.target.style.color="red";
        event.target.style.backgroundColor="black";
    }

    cambiarTexto(){        
        this.setState({
            texto: ""
        });        
    }

    render() {
        return (
            <header className='stCabecera'>
                <h1 onClick={this.handleClick}>{this.state.titulo}</h1>
                <p onClick={this.cambiarTexto}>{this.state.texto}</p>
                <p>Eros in cursus turpis massa tincidunt dui ut. Id diam maecenas ultricies mi. Dignissim diam quis enim lobortis scelerisque. Eu volutpat odio facilisis mauris sit. </p>
                <p>Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Quis risus sed vulputate odio ut enim blandit. Nunc mattis enim ut tellus elementum sagittis vitae et. </p>
                <p>Amet luctus venenatis lectus magna fringilla urna. Ultricies integer quis auctor elit sed vulputate. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. </p>
                <p>Integer eget aliquet nibh praesent tristique magna sit amet purus. Urna neque viverra justo nec ultrices. Aliquet nibh praesent tristique magna.</p>
            </header>
        );
    }
}


// Exportamos por defecto el contenido de clase "Contenido"
export default Contenido;