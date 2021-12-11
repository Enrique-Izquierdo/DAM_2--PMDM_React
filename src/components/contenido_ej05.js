// Unidad 3, actividad 7: Hooks
//
// Ejercicio 5 - Inserta una imagen -img- dentro de una etiqueta div. Implementa 
// las instrucciones necesarias para que cuando el usuario pase el cursor del ratón
// por encima de la imagen, ésta cambie su valor de opacidad a 0.2 y se agrande
// 20px tanto de ancho como de alto. Si el usuario hace click sobre la imagen, ésta
// se cambiará por otra. Si hace doble click sobre la nueva imagen, ésta volverá a
// cambiarse por la imagen original.

import React, {useState} from "react";

const Contenido = () => {

    let cssFotos = [{width:"400px", opacity:"1"}, {width:"450px", opacity:"0.5"}];
    let fotos = ["https://www.preferente.com/wp-content/uploads/2020/03/Peru-Machupichu.jpg", "https://www.peruhop.com/wp-content/uploads/cosas-por-hacer-en-peru-andes-huaraz.jpg"];

    const [imagen, setImagen] = useState(fotos.at(0));
    const [estilo, setEstilo] = useState(cssFotos.at(0));

    return (
        <div>
            <img src={imagen} alt="" style={estilo} 
                onMouseOver={ () => setEstilo(cssFotos.at(1)) } 
                onMouseOut={ () => setEstilo(cssFotos.at(0)) }
                onClick={ () => setImagen(fotos.at(1)) } 
                onDoubleClick={ () => setImagen(fotos.at(0)) }/>
        </div>
    );
}

export default Contenido;