//Importamos la librería React y los componentes de clase Cabecera y Contenido
//de los archivo cabecera.js y contenido.js
import React from 'react';
import Cabecera from './cabecera';
import Contenido from './contenido';

//Declaramos el componente de clase Principal que contiene los componentes
//de clase Cabecera y Contenido.
//Parametrizando mediante state
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

//Parametrizando mediante prop
// class Principal extends React.Component{
//     render(){
//         return (
//             <body>
//                 <Cabecera/>
//                 <Contenido titulo='Esto es un título' parrafo1='Esto es el parrafo 1' 
//                      parrafo2='Esto es el parrafo 2'/>
//             </body>
//         );
//     }
// }

//Exportamos el componente Cabecera.
export default Principal;