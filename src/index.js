import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
// Con las dos primeras instrucciones estamos importando las librerías React y 
// ReactDOM. La tercera línea de código importa el archivo index.css que hemos creado, 
// para introducir los estilos de la aplicación.


//Ejercicio 6
class MiImagen extends React.Component{
    render() {
        return <img src="https://www.tourist-destinations.com/wp-content/uploads/2013/04/Hyderabad-India-2.jpg" alt="Foto de mercado nocturno en la India" width="748" height="457" title="Mercado en Hyderabad, India"/>;
    }
}

// //Ejercicio 5
// class MiEnlace extends React.Component {
//     render() {
//         return <nav><a href="https://es.wikipedia.org/wiki/India">India</a> </nav>;
//     }
// }

// //Ejercicio 4
// class MiComponente extends React.Component {
//     render() {
//         let titulo1;
//         do{
//             titulo1 = prompt("¿Que quiere introducir como título?");
//         }while(!isNaN(titulo1))

//         let parrafo1;
//         do{
//             parrafo1 = prompt("¿Que quiere introducir como párrafo?");
//         }while(!isNaN(parrafo1))

//         return (
//             <div>
//                 <h1>{titulo1}</h1>
//                 <p>{parrafo1}</p>
//             </div>);
//     }
// }

//El componente se renderiza aquí:
ReactDOM.render(
    <MiImagen />,
    document.getElementById('root')
);

// De este modo hemos creado un primer componente, llamado MiComponente. Este 
// componente se crea a partir de una clase que extiende React.Component y devuelve un 
// título de primer nivel (h1) que dice Hola Mundo. El título se renderiza a partir del método 
// render() de la librería ReactDOM -últimas tres líneas del código-. Al renderizar el 
// componente instanciamos un objeto de la clase MiComponente -<MiComponente />, y lo 
// renderizamos en el punto de entrada de la aplicación -seleccionando el elemento del 
// archivo .html con una id “root”-. 