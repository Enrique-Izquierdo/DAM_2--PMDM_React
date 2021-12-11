// Unidad 3, actividad 7: Hooks
//
// Ejercicio 7 - Realiza el Ejercicio 2, pero esta vez utiliza funciones para
// manejar los eventos mouseOut y mouseOver.
//
// Ejercicio 2 - Inserta un párrafo en el interior de un div de modo que cuando 
// el usuario pase el cursor por encima del párrafo su contenido cambie. Al 
// retirar el cursor del párrafo, el párrafo volverá a tener el contenido
// original. 

import React, {useState} from 'react';

const Contenido = () => {

    const [texto, setTexto] = useState("Hola");

    return (
        <div>
            <p onMouseOver={ () => setTexto("Bienvenido") }
                onMouseOut={ () => setTexto("Hola") }>{texto}</p>
        </div>
    );
}

export default Contenido;