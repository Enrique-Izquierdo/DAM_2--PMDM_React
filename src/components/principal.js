import React from 'react';
import Cabecera from './cabecera';
import Seccion from './seccion';
import Footer from './footer';

// Creamos el componente de clase Seccion que devuelve las instancias
// de los componentes de clase Cabecera, Seccion y Footer.
class Principal extends React.Component {
    render(){
        return (
            <body>                
                <Cabecera/>
                <Seccion/>
                <Footer/>
            </body>
        );
    }
}

export default Principal;