//Importamos la librería React y los componentes de clase Cabecera y Contenido
//de los archivo cabecera.js y contenido.js
import React from 'react';
import Cabecera from './cabecera';
import Contenido from './contenido';

//Declaramos el componente de clase Principal que contiene los componentes
//de clase Cabecera y Contenido.
//Parametrizando mediante prop
class Principal extends React.Component{
    render(){
        return (
            <body>
                <Cabecera/>
                <Contenido titulo='Contenido 1' parrafo1='Parrafo 1A' parrafo2='Parrafo 1B'/>
                <Contenido titulo='Contenido 2' 
                    parrafo1={<img src={require('./img/paisaje.jpg').default} alt='paisaje' width='100%'/>} 
                    parrafo2='Parrafo 2B'/>
                <Contenido titulo='Contenido 3' parrafo1='Parrafo 3A' parrafo2='Parrafo 3B'/>
            </body>
        );
    }
}

//Parametrizando mediante state
// class Principal extends React.Component{
//     render(){
//         return (
//             <body>
//                 <Cabecera/>
//                 <Contenido/>
//             </body>
//         );
//     }
// }

//Exportamos el componente Cabecera.
export default Principal;