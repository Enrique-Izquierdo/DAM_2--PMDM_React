import React from 'react';
import Menu from './menu';
import Titulo from './titulo';
import Contenido from './contenido';

// Creamos el componente de clase Seccion que devuelve las instancias
// de los componentes de clase Menu, Titulo y Contenido.
class Seccion extends React.Component{
    render() {
        return (
            <section class='stSeccionCompleta'>
                <section class='stSeccionIzquierda'>
                    <Menu/>
                </section>                    
                <section class='stSeccionDerecha'>
                    <Titulo/>
                    <Contenido/>
                </section>                
            </section>
        );
    }
}

export default Seccion;