import React from 'react';
import Cabecera from './cabecera';
import Seccion from './seccion';
import Footer from './footer';

class Principal extends React.Component {
    render(){
        return (
            <div>
                <Cabecera/>
                <Seccion/>
                <Footer/>
            </div>
        );
    }
}

export default Principal;