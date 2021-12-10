// Unidad 3, actividad 7: Hooks
//
// Para estos ejercicios deberás implementar en el archivo index.css los estilos
// que estimes oportuno. Los ejercicios los crearás en una función Componente y
// deberás trabajar mediante useState.
//
// Ejercicio 1 - Inserta en el interior de un 'div' cuatro botones, de modo que
// cuando pulses el primero de ellos, el color de fondo del div pase a ser azul.
// Si pulsas el segundo botón, el color pasará a ser verde. Si pulsas el tercer
// botón, el color será el rojo y si pulsas el cuarto botón, el color será el
// violeta.


import React, { useState } from 'react';

const Contenido = () => {
    const [colorFondo, setColorFondo] = useState();

    return(
        <div style={{backgroundColor: colorFondo}}>
            <h1>Hola</h1>
            <button onClick={() => setColorFondo("blue")}>Azul</button>
            <button onClick={() => setColorFondo("green")}>Verde</button>
            <button onClick={() => setColorFondo("red")}>Rojo</button>
            <button onClick={() => setColorFondo("violet")}>Violeta</button>
        </div>

        // <div style={{backgroundColor: "red"}}>
        //     <h1>Hola</h1>
        // </div>
    );
};

export default Contenido;