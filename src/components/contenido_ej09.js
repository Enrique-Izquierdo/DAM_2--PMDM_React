import React from 'react';

class Contenido extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            titulo: "Unidad 3, actividad 5: Eventos en React",
            imagen: "https://www.preferente.com/wp-content/uploads/2020/03/Peru-Machupichu.jpg"
        }
        this.desplazarDerecha = this.desplazarDerecha.bind(this);
        this.desplazarIzquierda = this.desplazarIzquierda.bind(this);
    }

    desplazarDerecha(event){
        event.target.style.marginLeft="200px";
        event.target.style.transition="3s";
    }

    desplazarIzquierda(event){
        event.target.style.marginLeft="0px";
        event.target.style.transition="3s";
    }

    render(){
        return(
            <div>
                <h1>{this.state.titulo}</h1>
                <p>Ejercicio 9 – En el componente Contenido, borra el contenido introducido en el ejercicio 
                    anterior e introduce una imagen. Implementa la lógica necesaria para que cuando el 
                    usuario pase el cursor por encima de la imagen, ésta se desplace hacía la derecha 
                    200px en una transición de 2 segundos.</p>
                <h2>Ejercicio 9</h2>
                <img onMouseOver={this.desplazarDerecha} onMouseOut={this.desplazarIzquierda} src={this.state.imagen} alt="Machu Picchu" width="50%"/>
            </div>
        );
    }
}

export default Contenido;