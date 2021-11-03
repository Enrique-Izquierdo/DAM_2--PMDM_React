//Importamos la librería React
import React from "react";

//Declaramos el componente de clase Cabecera
class Cabecera extends React.Component{
    render(){
        return (
            <header className='stCabecera'>
                <h1>Aquí va mi título de cabecera</h1>
            </header>
        );
    }
}

//Exportamos el componente de clase Cabecera
export default Cabecera;