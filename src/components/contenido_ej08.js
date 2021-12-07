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
        };
        this.ocultarImagen = this.ocultarImagen.bind(this);
        this.verImagen = this.verImagen.bind(this);
    }

    ocultarImagen(event){        
        event.target.style.opacity="0.0";
        event.target.style.transition="3s";
    }

    verImagen(event){
        event.target.style.opacity="0.2";        
        event.target.style.transition="3s";
    }

    
    render() {
        return (
            <div className='stDiv'>
                <h1>{this.state.titulo}</h1>
                <p>Ejercicio 8 – En el componente Contenido, borra el contenido introducido en el ejercicio 
                    anterior e introduce una imagen. Implementa la lógica necesaria para que cuando el 
                    usuario pase el cursor por encima de la imagen, ésta desaparezca, y cuando lo retire la 
                    opacidad pasará a ser del 20%. Hará ambos casos en una transición de 2 segundos. 
                    Nota: desaparezca, quiere decir opacidad del 100% (style.opacity =1).</p>
                <h2>Ejercicio 8</h2>
                <p><img onMouseOver={this.ocultarImagen} onMouseOut={this.verImagen} style={{opacity: 1}} src={this.state.imagenes[0]} alt="" width="75%"/></p><br/>
            </div>
        );
    }
}


// Exportamos por defecto el contenido de clase "Contenido"
export default Contenido;