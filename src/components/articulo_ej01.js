import React from "react";

class Articulo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            titulo: "La Ciudad de las Artes y las Ciencias",
        };
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({ titulo: "Diseñada por Santiago Calatrava"})
        }, 2000);
    }

    render(){
        return (
            <article>
                <h1>{this.state.titulo}</h1>
                <p>Ubicada al final del viejo cauce del río Turia, la Ciudad de las Artes y las Ciencias es un complejo arquitectónico, cultural y de entretenimiento diseñado por Santiago Calatrava y Félix Candela, junto con los ingenieros autores del diseño estructural de las cubiertas del L'Oceanografic Alberto Domingo y Carlos Lázaro.</p>
            </article>    
        );
    }
}

export default Articulo;