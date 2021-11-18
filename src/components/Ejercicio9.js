import React from 'react';


class Contenido extends React.Component {
    constructor(props){
      super(props);
      this.state={
        titulo: "Imágenes",
        imagen: "https://static.educalingo.com/img/en/800/sunset.jpg"
      };
      this.handleMouseOver = this.handleMouseOver.bind(this);
      this.handleMouseOut = this.handleMouseOut.bind(this);
      }
    
    handleMouseOver(event){
      event.preventDefault();
      event.target.style.transition = "2s";
      event.target.style.left = "260px";
    }
  
    handleMouseOut(event){
      event.preventDefault();
      event.target.style.transition = "2s";
      event.target.style.left = "0px";
    }
  
    render(){
      return (
        <div className="pagina">
          <h1>{this.state.titulo}</h1>        
          <div id="caja1" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}></div>
        </div>
      )
    }
  }
  
  // El componente se exporta aquí:
  export default Contenido;
  