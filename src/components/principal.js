// Importamos la clase React de la librería 'react' para poder declarar el componente de clase.
import React from 'react';
// Importamos los componentes de clase "Cabecera" y "Contenido" de los archivos 'cabecera.js' y 
// 'contenido.js' ubicados en la misma carperta (directorio) que principal.js
import Cabecera from './cabecera.js';
import Contenido from './contenido_ej10.js';

// Creamos el componente de clase "Principal" que hereda de la clase React.Component, y
// que tiene un método render() que devuelve los componentes de clase "Cabecera" y "Contenido"
class Principal extends React.Component {
    render(){
        return (
            <main>
                <Cabecera/>
                <Contenido/>
            </main>
        )
    }
}

// Exportamos por defecto el componente de clase "Principal"
export default Principal;