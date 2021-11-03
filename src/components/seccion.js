import React from 'react';
import Menu from './menu';
import Titulo from './titulo';
import Contenido from './contenido';

// Creamos el componente de clase Seccion que devuelve las instancias
// de los componentes de clase Menu, Titulo y Contenido.
class Seccion extends React.Component{
    render() {
        return (
            <section className='stSeccionCompleta'>
                <section className='stSeccionIzquierda'>
                    <Menu/>
                </section>                    
                <section className='stSeccionDerecha'>
                    <Titulo/>
                    <Contenido/>
                </section>                
            </section>
        );
    }
}

export default Seccion;