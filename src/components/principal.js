//Importamos la librería React y los componentes de clase Cabecera y Contenido
//de los archivo cabecera.js y contenido.js
import React from 'react';
import Cabecera from './cabecera';
import Contenido from './contenido';

//Declaramos el componente de clase Principal que contiene los componentes
//de clase Cabecera y Contenido.
class Principal extends React.Component{
    render(){
        return (
            <body>
                <Cabecera/>
                <Contenido/>
            </body>
        );
    }
}

//Exportamos el componente Cabecera.
export default Principal;