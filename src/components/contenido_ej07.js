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

        this.agrandarImagen = this.agrandarImagen.bind(this);
        this.reducirImagen = this.reducirImagen.bind(this);
    }

    agrandarImagen(){
        this.setState({
             ancho: "600px",
             alto: "300px"
        })
    }

    reducirImagen(){
        this.setState({
            ancho: "300px",
            alto: "150px"
        })
    }

    
    render() {
        return (
            <div className='stDiv'>
                <h1 onClick={this.handleClick}>{this.state.titulo}</h1>
                <h2>Ejercicio 7</h2>
                <img onMouseOver={this.agrandarImagen} onMouseOut={this.reducirImagen} src={this.state.imagenes[this.state.numImagen]} alt="" width={this.state.ancho} height={this.state.alto}/>   
            </div>
        );
    }
}


// Exportamos por defecto el contenido de clase "Contenido"
export default Contenido;