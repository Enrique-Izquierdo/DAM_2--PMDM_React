//Importamos la librería React
import React from "react";

//Declaramos el componente de clase Contenido
//Parametrizando mediante state
class Contenido extends React.Component{
    constructor(props){
        super(props);
        this.state={
            titulo: 'Esto es un título',
            parrafo1: 'Esto es el parrafo 1',
            parrafo2: 'Esto es el parrafo 2'
        };
    }
    render(){
        return (
            <header className='stContenido'>
                <h2>{this.state.titulo}</h2>
                <p>{this.state.parrafo1}</p>
                <p>{this.state.parrafo2}</p>
            </header>
        );
    }
}

//Parametrizando mediante prop
// class Contenido extends React.Component{
//     render(){
//         return (
//             <main className='stContenido'>
//                 <h2>{this.props.titulo}</h2>
//                 <p>{this.props.parrafo1}</p>
//                 <p>{this.props.parrafo2}</p>
//             </main>
//         );
//     }
// }

//Exportamos el componente de clase Contenido.
export default Contenido;