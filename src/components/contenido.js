// Importamos la clase React de la librería 'react'
import React from 'react';


// Creamos el componente de clase "Contenido" que hereda de la clase
// React.Component, y tiene un método render que devuelve...
class Contenido extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            titulo: "Unidad 3, actividad 5: Eventos en React",
            imagenes: ["https://www.preferente.com/wp-content/uploads/2020/03/Peru-Machupichu.jpg", "https://www.peruhop.com/wp-content/uploads/cosas-por-hacer-en-peru-andes-huaraz.jpg", "https://www.peruhop.com/wp-content/uploads/cosas-por-hacer-en-peru-selva.jpg"],
            numImagen: 0,
            ancho: "300px",
            alto: "150px",
            texto1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur lorem donec massa sapien faucibus et. Eros in cursus turpis massa tincidunt dui ut. Id diam maecenas ultricies mi. Dignissim diam quis enim lobortis scelerisque. Eu volutpat odio facilisis mauris sit. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Quis risus sed vulputate odio ut enim blandit. Nunc mattis enim ut tellus elementum sagittis vitae et. Amet luctus venenatis lectus magna fringilla urna. Ultricies integer quis auctor elit sed vulputate. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Integer eget aliquet nibh praesent tristique magna sit amet purus. Urna neque viverra justo nec ultrices. Aliquet nibh praesent tristique magna.",
            texto2: "Eros in cursus turpis massa tincidunt dui ut. Id diam maecenas ultricies mi. Dignissim diam quis enim lobortis scelerisque. Eu volutpat odio facilisis mauris sit.",
            texto3: "Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Quis risus sed vulputate odio ut enim blandit. Nunc mattis enim ut tellus elementum sagittis vitae et.",
            texto4: "Amet luctus venenatis lectus magna fringilla urna. Ultricies integer quis auctor elit sed vulputate. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis.",
            texto5: "Integer eget aliquet nibh praesent tristique magna sit amet purus. Urna neque viverra justo nec ultrices. Aliquet nibh praesent tristique magna."
        };
        this.handleClick = this.handleClick.bind(this);
        this.ocultarImagen = this.ocultarImagen.bind(this);
        this.verImagen = this.verImagen.bind(this);
        this.verImagenAnterior = this.verImagenAnterior.bind(this);
        this.verImagenSiguiente = this.verImagenSiguiente.bind(this);
        this.agrandarImagen = this.agrandarImagen.bind(this);
        this.reducirImagen = this.reducirImagen.bind(this);
        this.cambiarEstilo = this.cambiarEstilo.bind(this);
        this.cambiarTexto = this.cambiarTexto.bind(this);
        this.handleOver = this.handleOver.bind(this)
        this.handleOut = this.handleOut.bind(this)
    }

    handleClick(event){
        event.preventDefault();
        event.target.style.color="red";
        event.target.style.backgroundColor="black";
    }

    ocultarImagen(event){
        event.target.style.opacity="0.0";
    }

    verImagen(event){
        event.target.style.opacity="0.2";
    }


    verImagenAnterior(){
        this.state.numImagen>0 ? this.setState({ numImagen: this.state.numImagen-1 }) : this.setState({ numImagen: this.state.imagenes.length-1 })
    }

    verImagenSiguiente(){
        if (this.state.numImagen < this.state.imagenes.length-1) {
            this.setState({ numImagen: this.state.numImagen+1 });
        } else {
            this.setState({ numImagen: 0 });
        }        
    }

    agrandarImagen(){
        this.setState({
             ancho: "600px",
             alto: "300px"
        })
    }

    reducirImagen(){
        this.setState({
            ancho: "300px",
            alto: "150px"
        })
    }

    cambiarEstilo(event){  
        this.state.texto1.length<300 ? event.target.style.fontSize = "30px" : event.target.style.textDecoration = "underline";
        // if(this.state.texto1.length<300){
        //     event.target.style.fontSize = "30px";
        // } else {
        //     event.target.style.textDecoration = "underline";
        // }
    }

    cambiarTexto(event){
        let numId = event.target.id;
        if(numId=="2"){
            this.setState({ texto2: "" });
        } else if(numId=="3"){
            this.setState({ texto3: "" });
        } else if(numId=="4"){
            this.setState({ texto4: "" });
        } else if(numId=="5"){
            this.setState({ texto5: "" });
        }
    }

    handleOver(event){
        let numId =event.target.id;
        if(numId==="1"){
            event.target.style.backgroundColor="blue";
        } else if(numId==="2"){
            event.target.style.backgroundColor="orange";
        } else if(numId==="3"){
            event.target.style.backgroundColor="green";
        } else if(numId==="4"){
            event.target.style.backgroundColor="yellow";
        } else if(numId==="5"){
            event.target.style.backgroundColor="red";
        }
    }

    handleOut(event){
        event.target.style.backgroundColor="white";
    }
    
    render() {
        return (
            <div className='stDiv'>
                <h1 onClick={this.handleClick}>{this.state.titulo}</h1>
                
                <h2>Ejercicio 8</h2>
                <p><img onMouseOver={this.ocultarImagen} onMouseOut={this.verImagen} style={{opacity: 1}} src={this.state.imagenes[0]} alt="" width="75%"/></p><br/>
                
                <h2>Ejercicios 6 y 7</h2>
                <img onMouseOver={this.agrandarImagen} onMouseOut={this.reducirImagen} src={this.state.imagenes[this.state.numImagen]} alt="" width={this.state.ancho} height={this.state.alto}/><br/>
                <button onClick={this.verImagenAnterior}>Ver anterior</button>
                <button onClick={this.verImagenSiguiente}>Ver siguiente</button><br/><br/>
               
                <h2>Ejercicios del 1 al 5</h2>
                <p id="1" onClick={this.cambiarEstilo} onMouseOver={this.handleOver} onMouseOut={this.handleOut}>{this.state.texto1}</p>
                <p id="2" onClick={this.cambiarTexto} onMouseOver={this.handleOver} onMouseOut={this.handleOut}>{this.state.texto2}</p>
                <p id="3" onClick={this.cambiarTexto} onMouseOver={this.handleOver} onMouseOut={this.handleOut}>{this.state.texto3}</p>
                <p id="4" onClick={this.cambiarTexto} onMouseOver={this.handleOver} onMouseOut={this.handleOut}>{this.state.texto4}</p>
                <p id="5" onClick={this.cambiarTexto} onMouseOver={this.handleOver} onMouseOut={this.handleOut}>{this.state.texto5}</p>
            </div>
        );
    }
}


// Exportamos por defecto el contenido de clase "Contenido"
export default Contenido;