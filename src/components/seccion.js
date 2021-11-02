import React from 'react';
import Menu from './menu';
import Titulo from './titulo';
import Contenido from './contenido';

// Creamos el componente de clase Seccion que devuelve las instancias
// de los componentes de clase Menu, Titulo y Contenido.
class Seccion extends React.Component{
    render() {
        return (
            <div>
                <Menu/>
                <Titulo/>
                <Contenido/>
            </div>
        );
    }
}

export default Seccion;