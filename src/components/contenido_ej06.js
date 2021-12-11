// Unidad 3, actividad 7: Hooks
//
// Para los siguientes ejercicios deberás emplear funciones para manejar los
// eventos e inicializar el estado con useState().
//
// Ejercicio 6 - Realiza el Ejercicio 1, pero esta vez utiliza una función para
// manejar los cuatro eventos de click asociados a los cuatro botones y el fondo
// esté inicialmente de color amarillo.
//
// Ejercicio 1 - Inserta en el interior de un 'div' cuatro botones, de modo que
// cuando pulses el primero de ellos, el color de fondo del div pase a ser azul.
// Si pulsas el segundo botón, el color pasará a ser verde. Si pulsas el tercer
// botón, el color será el rojo y si pulsas el cuarto botón, el color será el
// violeta.

import React, {useState} from 'react';

const Contenido = () => {

    const [color, setColor] = useState("yellow");

    return (
        <div style={{backgroundColor: color, height: "100px"}}>
            <p></p>
            <button onClick={ () => setColor("blue")}>Azul</button>
            <button onClick={ () => setColor("green")}>Verde</button>
            <button onClick={ () => setColor("red")}>Rojo</button>
            <button onClick={ () => setColor("violet")}>Violeta</button>
        </div>
    );
}

export default Contenido;