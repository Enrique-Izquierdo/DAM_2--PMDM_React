// Unidad 3, actividad 6: métodos Ciclo de Vida
//
// Ejercicio 4 - Utilizando los métodos de ciclo de vida y timers, implementa la
// lógica necesaria para que además de lo implementado en el ejercicio anterior,
// cuando el párrafo esté totalmente escrito, el contenido de éste se cambie por
// un nuevo párrafo completo.


import React from "react";

class Articulo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            titulo: "La Ciudad de las Artes y las Ciencias",
            parrafo: ""
        };
    }

    componentDidMount(){
        let cadenaParrafo = "Ubicada al final del viejo cauce del río Turia, la Ciudad de las Artes y las Ciencias es un complejo arquitectónico, cultural y de entretenimiento diseñado por Santiago Calatrava y Félix Candela, junto con los ingenieros autores del diseño estructural de las cubiertas del L'Oceanografic Alberto Domingo y Carlos Lázaro."
        let i=0;
        let numCaracteres = cadenaParrafo.length;

        let intervalTimerId = setInterval(() => {
            i++;
            this.setState({
                parrafo: cadenaParrafo.substring(0, i)
            });
         }, 100);

        setTimeout(() => {
            clearInterval(intervalTimerId);
            this.setState({ 
                titulo: "Diseñada por Santiago Calatrava", 
                parrafo: "Santiago Calatrava Valls (Benimámet, 28 de julio de 1951) es un arquitecto, ingeniero civil y escultor español. Entre los premios y reconocimientos que ha recibido destaca el Premio Príncipe de Asturias de las Artes de 1999, los premios Nacional de Arquitectura y Nacional de Ingeniería Civil ambos en 2005 y el Premio Europeo de Arquitectura de 2015. Actualmente, cuenta con oficinas en Nueva York, Doha y Zúrich."
            });
        }, (numCaracteres+5)*100);
    }

    render(){
        return (
            <article>
                <h1>{this.state.titulo}</h1>
                <p>{this.state.parrafo}</p>
                {/* <p>{this.state.parrafo.length}</p> */}
            </article>    
        );
    }
}

export default Articulo;