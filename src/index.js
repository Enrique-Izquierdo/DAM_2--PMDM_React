//Importamos las librerías React y ReactDOM, y el archivo index.css.
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Principal from './components/principal'

class Index extends React.Component{
    render(){
        return <Principal/> ;
    }
}

//Renderizamos el componente de clase Index, invocando al método render() de la 
//librería ReactDOM. Al renderizar el componente Index, instanciamos un objeto de 
//la clase Index, y lo renderizamos en el punto de entrada de la aplicación -
//seleccionando el elemento del arhivo .html con una id "root"-.
ReactDOM.render(<Index/>, document.getElementById('root'));