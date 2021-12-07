// Importamos la clase React de la librería 'react'
import React from 'react';


// Creamos el componente de clase "Contenido" que hereda de la clase
// React.Component, y tiene un método render que devuelve...
class Contenido extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            titulo: "Unidad 3, actividad 5: Eventos en React",
    };
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(event){
        event.preventDefault();
        event.target.style.color="red";
        event.target.style.backgroundColor="black";
    }

    render() {
        return (
            <div className='stDiv'>
                <h1 onClick={this.handleClick}>{this.state.titulo}</h1>
                <p>Ejercicio 1 – En el componente Contenido, crea un título de primer nivel. Implementa la 
                    lógica necesaria para que cuando el usuario haga click sobre el título, se cambie el 
                    color de la letra a rojo y el fondo a negro.
                    </p>                
            </div>
        );
    }
}


// Exportamos por defecto el contenido de clase "Contenido"
export default Contenido;