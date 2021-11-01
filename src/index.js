import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
// Con las dos primeras instrucciones estamos importando las librerías React y 
// ReactDOM. La tercera línea de código importa el archivo index.css que hemos creado, 
// para introducir los estilos de la aplicación.

class MiComponente extends React.Component {
    render() {
        return <h1>Hola mundo</h1>;
    }
}

//El componente se renderiza aquí:
ReactDOM.render(
    <MiComponente />,
    document.getElementById('root')
);

// De este modo hemos creado un primer componente, llamado MiComponente. Este 
// componente se crea a partir de una clase que extiende React.Component y devuelve un 
// título de primer nivel (h1) que dice Hola Mundo. El título se renderiza a partir del método 
// render() de la librería ReactDOM -últimas tres líneas del código-. Al renderizar el 
// componente instanciamos un objeto de la clase MiComponente -<MiComponente />, y lo 
// renderizamos en el punto de entrada de la aplicación -seleccionando el elemento del 
// archivo .html con una id “root”-. 