// Unidad 3, actividad 7: Hooks
//
// Ejercicio 4 - Dentro de una etiqueta main, incluye una etiqueta nav donde
// insertes un menú con varios apartados -sirviéndote de las etiquetas li y ul-.
// En la parte superior del menú, añade un título de segundo nivel con la 
// inscripción "Menú". Implementa las instrucciones necesarias para que cuando
// el usuario haga click sobre éste título, el menú se oculte. Cuando haga doble
// click sobre el título, el menú se volverá a mostrar. 

import React, {useState} from 'react';

const Contenido = () => {
    
    let listado = (
        <ul>
            <li>Machu Picchu</li>
            <li>Titicaca</li>
            <li>Selva peruana</li>
        </ul>);

    const [menu, setMenu] = useState(listado);

    return (
        <main>            
            <nav>
                <h2 onClick={() => setMenu("")} 
                    onDoubleClick={() => setMenu(listado)}>Menú</h2>
                {menu}
            </nav>
        </main>
    );
}

export default Contenido;