// Importamos la clase React de la librería 'react'
import React from 'react';


// Creamos el componente de clase "Contenido" que hereda de la clase
// React.Component, y tiene un método render que devuelve...
class Contenido extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            titulo: "Unidad 3, actividad 5: Eventos en React",
            imagenes: ["https://www.preferente.com/wp-content/uploads/2020/03/Peru-Machupichu.jpg", "https://www.peruhop.com/wp-content/uploads/cosas-por-hacer-en-peru-andes-huaraz.jpg", "https://www.peruhop.com/wp-content/uploads/cosas-por-hacer-en-peru-selva.jpg"],
            numImagen: 0,
            ancho: "300px",
            alto: "150px",
        };
        this.verImagenAnterior = this.verImagenAnterior.bind(this);
        this.verImagenSiguiente = this.verImagenSiguiente.bind(this);
    }

    verImagenAnterior(){
        this.state.numImagen>0 ? this.setState({ numImagen: this.state.numImagen-1 }) : this.setState({ numImagen: this.state.imagenes.length-1 })
    }

    verImagenSiguiente(){
        if (this.state.numImagen < this.state.imagenes.length-1) {
            this.setState({ numImagen: this.state.numImagen+1 });
        } else {
            this.setState({ numImagen: 0 });
        }        
    }

    
    render() {
        return (
            <div className='stDiv'>
                <h1>{this.state.titulo}</h1>
                <p>Ejercicio 6 – En el componente Contenido, borra los cinco párrafos e introduce una 
                    imagen y dos botones, uno con el título “Anterior” y el otro “Siguiente”. Guarda tres o 
                    más imágenes e implementa la lógica necesaria para que cuando el usuario haga click 
                    sobre el botón siguiente, la imagen cambie a la siguiente imagen guardada. Cuando 
                    llegue a la última imagen guardada, deberá de volver a mostrar la primera. SI en 
                    cambio pulsa el botón anterior, mostrará la imagen guardada que precede a la que se 
                    muestra en pantalla. Cuando pulse anterior estando en la primera imagen guardada, 
                    pasará a mostrarse la última imagen guardada.</p>
                <h2>Ejercicio 6</h2>
                <img src={this.state.imagenes[this.state.numImagen]} alt="" width={this.state.ancho} height={this.state.alto}/><br/>
                <button onClick={this.verImagenAnterior}>Ver anterior</button>
                <button onClick={this.verImagenSiguiente}>Ver siguiente</button><br/><br/>                 
            </div>
        );
    }
}


// Exportamos por defecto el contenido de clase "Contenido"
export default Contenido;