// Importamos la clase React de la librería 'react'
import React from 'react';


// Creamos el componente de clase "Contenido" que hereda de la clase React.Component, y
// tiene un método render que devuelve...
class Contenido extends React.Component {
    render() {
        return (
            <header className='stCabecera'>
                <h1>Actividades: Eventos React</h1>

            </header>
        );
    }
}



// Exportamos por defecto el contenido de clase "Contenido"
export default Contenido;