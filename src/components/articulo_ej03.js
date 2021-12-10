// Unidad 3, actividad 6: métodos Ciclo de Vida
//
// Ejercicio 3 – Utilizando los métodos de ciclo de vida y timers, implementa la
// lógica necesaria para que al cargarse la página el contenido del primer párrafo
// se escriba de manera prograseiva, a razón de una letra cada 100 milisegundos.


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
        setInterval(() => {
            i++;
            this.setState({
                parrafo: cadenaParrafo.substring(0, i)
            });
        }, 100);
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