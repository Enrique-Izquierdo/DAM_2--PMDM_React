// Importamos la clase React de la librería 'react' y 
// la clase ReactDOM de la librería 'react-dom'
import React from "react";
import ReactDOM from "react-dom";
// Importamos el componente de clase Principal del archivo 'principal.js',
// ubicado en la dirección relativa ./components/principal.js
import Principal from './components/principal.js';

// Creamos el componente de clase "Index" que hereda de la clase "React", y
// que contiene el método render() que devuelve el componente de clase "Principal"
class Index extends React.Component {
    render(){
        return <Principal/>;        
    }
}

// LLamamos al método "render()" de la clase ReactDOM para renderizar el componente 
// de clase 'Index' en el elemento del DOM 'root', ambos pasados por parámetro
ReactDOM.render(<Index/>, document.getElementById('root'));
