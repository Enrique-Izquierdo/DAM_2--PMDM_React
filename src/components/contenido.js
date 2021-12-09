import React from "react";
import Articulo from "./articulo_ej01";
import Menu from "./menu";

class Contenido extends React.Component{
    render(){
        return(
            <main>
                <Articulo/>
                <Menu/>
            </main>
        );
    }
}

export default Contenido;