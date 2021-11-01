import React from "react";

//Componente de clase "Contenido"
class Contenido extends React.Component{
    render(){
        return (
            <form>
                <label for="fnombre">Nombre: </label><input type="text" id="fnombre" name="nombre"/><br/>
                <label for="fapellidos">Apellidos: </label><input type="text" id="fapellidos" name="apellidos"/><br/>
                <label for="fapellidos">A continuación puede indicar cualquier información de interés: </label><br/>
                <textarea name="comentarios" rows="10" cols="60"/><br/>
                <input type="submit" value="Enviar"/>
            </form>
        );
    }
}

export default Contenido;