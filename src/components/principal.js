import React from 'react';
import Cabecera from './components/cabecera';
import Contenido from './components/contenido';

//Componente de clase "Principal"

class Principal extends React.Component {
    render(){
        return (
            <div class="principal">
                <Cabecera/>
                <Contenido/>
            </div>
        );
    }
}

export default Principal;