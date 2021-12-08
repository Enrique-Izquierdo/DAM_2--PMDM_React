import React from 'react';

class Contenido extends React.Component{
    constructor(props){
        super(props);
        this.state={
            titulo: "Unidad 3, actividad 5: Eventos en React",
            nombre: "",
            apellidos: "",
            dni: ""
        }
        this.guardarTexto = this.guardarTexto.bind(this);
        this.confirmarEnvio = this.confirmarEnvio(this);
    }

    guardarTexto(event){
        event.preventDefault();
        let texto = event.target.value;
        let ultimoCaracter = texto[texto.length-1];
        if(event.target.id==="idDni"){
            this.setState({ dni: texto });
        } else if(event.target.id==="idNombre"){
            isNaN(ultimoCaracter) ? this.setState({ nombre: texto }) : alert("No se admiten números.");
        } else if(event.target.id==="idApellido"){
            isNaN(ultimoCaracter) ? this.setState({ apellidos: texto }) : alert("No se admiten números.");
        }
        }

    confirmarEnvio(){
        alert("nombre: "+this.state.nombre+"\napellidos: "+this.state.apellidos+"\ndni: "+this.state.dni);
    }

    render(){
        return(
            <div>
                <h1>{this.state.titulo}</h1>
                <p>Ejercicio 10 – En el componente Contenido, borra el contenido introducido en el 
                    ejercicio anterior e introduce un formulario donde el usuario pueda introducir su 
                    nombre, apellidos y DNI. Implementa la lógica necesaria para que cuando el usuario 
                    introduzca números en los campos destinados al nombre y los apellidos, salte una 
                    alerta indicándole que introduzca los datos correctos, Nota: utiliza el evento onSubmit 
                    para el formulario y onChange para cada uno de los campos del formulario -este evento 
                    detecta cada cambio que se produce-.</p>
                <h2>Ejercicio 10</h2>
                <form onSubmit={this.confirmarEnvio}>
                    <label for="idNombre">Nombre: </label><input onChange={this.guardarTexto} type="text" name="nombre" id="idNombre"/><br/><br/>
                    <label for="idApellidos">Apellidos: </label><input onChange={this.guardarTexto} type="text" name="apellidos" id="idApellidos"/><br/><br/>
                    <label for="idDni">DNI: </label><input onChange={this.guardarTexto} type="text" name="dni" id="idDni"/><br/><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default Contenido;