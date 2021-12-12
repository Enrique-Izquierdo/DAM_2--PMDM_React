// Unidad 3, actividad 7: Hooks
//
// Ejercicio 9 - Realiza el Ejercicio 4, pero esta vez sírvete de funciones para
// manejar los eventos asociados al menú, e implementa que al cargarse la
// aplicación el menú no esté visible. De este modo, cuando el usuario realice
// click sobre el título Menú, el contenido del menú pasará a mostrarse. Si el
// usuario hace doble click, el contenido del menú se volverá a mostrar.
//
// Ejercicio 4 - Dentro de una etiqueta main, incluye una etiqueta nav donde
// insertes un menú con varios apartados -sirviéndote de las etiquetas li y ul-.
// En la parte superior del menú, añade un título de segundo nivel con la 
// inscripción "Menú". Implementa las instrucciones necesarias para que cuando
// el usuario haga click sobre éste título, el menú se oculte. Cuando haga doble
// click sobre el título, el menú se volverá a mostrar.

import React, {useState} from 'react';

const Contenido = () => {
    
    const lista = (  
        <ul>
            <li>Machupicchu</li>
            <li>Titicaca</li>
            <li>Selva peruana</li>
        </ul>
    );

    const [menu, setMenu] = useState("");

    return (
        <main>
            <nav>
                <h2 onClick={ () => setMenu(lista) } 
                    onDoubleClick={ () => setMenu("") }>Menú</h2>
                {menu}
            </nav>
        </main>
    );
}

export default Contenido;