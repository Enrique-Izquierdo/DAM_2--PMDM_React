//Importamos la librería React
import React from "react";

//Declaramos el componente de clase Contenido
class Contenido extends React.Component{
    render(){
        return (
            <main className='stContenido'>
                <h2>{this.props.titulo}</h2>
                <p>{this.props.parrafo1}</p>
                <p>{this.props.parrafo2}</p>
            </main>
        );
    }
}

//Exportamos el componente de clase Contenido.
export default Contenido;