import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Principal from "./components/principal";
// Las dos primeras instrucciones importan las librerías React y ReactDOM. 
// La tercera instrucción importa el archivo index.css que hemos creado, 
// para introducir los estilos de la aplicación.

class Index extends React.Component{
    render(){
        return <Principal/> ;
    }
}

//El componente se renderiza aquí:
ReactDOM.render(<Index/>, document.getElementById('root'));

// El codigo devuelto por "return" se renderiza a partir del método render() 
// de la librería ReactDOM. Al renderizar el componente de clase "Index", 
// instanciamos un objeto de la clase Index -<Index />-, y lo renderizamos 
// en el punto de entrada de la aplicación -seleccionando el elemento del 
// archivo .html con una id “root”-.