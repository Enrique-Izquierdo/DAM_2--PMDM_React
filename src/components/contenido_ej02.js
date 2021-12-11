// Unidad 3, actividad 7: Hooks
//
// Ejercicio 2 - Inserta un párrafo en el interior de un div de modo que cuando 
// el usuario pase el cursor por encima del párrafo su contenido cambie. Al 
// retirar el cursor del párrafo, el párrafo volverá a tener el contenido
// original. 


import React, { useState } from 'react';

const Contenido = () => {
    const [texto, setTexto] = useState("Preparados");

    return(
        <div>
            <p onMouseOver={() => setTexto("Listos")} onMouseOut={() => setTexto("Ya")}>{texto}</p>
        </div>
    );
};

export default Contenido;