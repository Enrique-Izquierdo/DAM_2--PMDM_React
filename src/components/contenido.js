import React from 'react';


class Contenido extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            parrafo1: "Leonardo de Pisa (1170-1240), más conocido como Fibonacci, publicó en el año 1202, un libro titulado Liber Abaci, en el que incluyó varios problemas y métodos algebraicos entre los que destacaba una sucesión numérica que servía para predecir las cifras de reproducción de los conejos.",
            parrafo2: "La serie ya había sido descrita anteriormente por matemáticos hindúes como Gopala y Hemachandra y hoy en día es muy conocida en el mundo matemático, donde se la conoce por sucesión, serie o espiral de Fibonacci.",
            parrafo3: "La espiral aparece constantemente en la naturaleza. La podemos observar por ejemplo en las escamas de una piña, en las flores de la alcachofa o del girasol. También en la forma de una concha marina, en huracanes y algunas galaxias.",
        };
        this.handleOver = this.handleOver.bind(this);
        this.handleOut = this.handleOut.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleOver(event){
        event.preventDefault();
        event.target.style.color="red";
    }

    handleOut(event){
        event.preventDefault();
        event.target.style.color="black";
    }

    handleClick(event){
        event.preventDefault();
        event.target.style.background="url('https://matemelga.files.wordpress.com/2019/02/espiralfibonacci.jpg') no-repeat";
    }

    render(){
        return(
            <article>                
                <p className='imagen' onClick={this.handleClick}/>
                <p onMouseOver={this.handleOver} onMouseOut={this.handleOut}>{this.state.parrafo1}</p>
                <p onMouseOver={this.handleOver} onMouseOut={this.handleOut}>{this.state.parrafo2}</p>
                <p onMouseOver={this.handleOver} onMouseOut={this.handleOut}>{this.state.parrafo3}</p>
            </article>
        );
    }
}


export default Contenido;