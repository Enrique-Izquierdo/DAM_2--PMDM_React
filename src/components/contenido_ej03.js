// Unidad 3, actividad 7: Hooks
//
// Ejercicio 3 - Implementa una imagen y dos botones -anterior y posterior-, 
// de modo que al hacer click en el botón "siguiente" se muestre otra imagen.
// Al hacer click sobre "anterior", se mostrará la imagen original. 
// Nota: no hay que implementar un "carrusel" de dos imágenes. Es decir, cuando
// se muestre la segunda imagen, al pulsar click sobre siguiente, no es necesario
// implementar que vuelva a la anterior.

import React, {useState} from 'react';

const Contenido = () => {
    const [imagen, setImagen] = useState("https://www.preferente.com/wp-content/uploads/2020/03/Peru-Machupichu.jpg");
    return(
        <div>
            <img src={imagen} alt="" width="100%"/>            
            <button onClick={() => setImagen("https://www.preferente.com/wp-content/uploads/2020/03/Peru-Machupichu.jpg")}>Anterior</button>
            <button onClick={() => setImagen("https://www.peruhop.com/wp-content/uploads/cosas-por-hacer-en-peru-andes-huaraz.jpg")}>Siguiente</button>
        </div>
    );
}

export default Contenido;