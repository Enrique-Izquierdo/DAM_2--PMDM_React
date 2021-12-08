import React from "react";

class Contenido extends React.Component {
    constructor(props){
        super(props);
        this.state={
            titulo: "Unidad 3, actividad 5: Eventos en React",
            imagen: "https://www.preferente.com/wp-content/uploads/2020/03/Peru-Machupichu.jpg"
        }
        this.handleLoad = this.handleLoad.bind(this);
    }

    handleLoad(event){
        event.preventDefault();
        setTimeout(() => {
            event.target.style.opacity="0.2"
        }, 2000);
    }

    render(){
        return(
            <div>
                <h1>{this.state.titulo}</h1>
                <p>Ejercicio 11 – En el componente Contenido, borra el contenido introducido en el ejercicio 
                    anterior e introduce una imagen. Implementa la lógica necesaria para que 2 segundos 
                    después de cargarse la página, la imagen tenga una opacidad del 20%. Nota: utiliza el 
                    evento onLoad para que se produzca al cargarse la imagen y en el manejador de este
                    evento utiliza el método setTimeout para establecer el tiempo que tardará en 
                    producirse la reacción al evento. </p>
                <h2>Ejercicio 11</h2>
                <img onLoad={this.handleLoad} src={this.state.imagen} alt=""/>
            </div>

        );
    }
}

export default Contenido;