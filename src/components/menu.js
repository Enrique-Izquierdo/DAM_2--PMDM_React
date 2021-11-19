import React from 'react';

class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            titulo: "Fibonacci en...",
            texto1: "...la naturaleza",
            link1: 'https://adrianageorgieff.wordpress.com/2019/02/07/fibonacci-y-el-patron-de-la-naturaleza/',
            texto2: "...la arquitectura y el arte",
            link2: "https://fibonacci.com/art-architecture/",
            texto3: "...la musica",
            link3: 'https://www.proporcionaurea.com/diseno/musica-sus-escalas-y-fibonacci/'
        }
    }
    render(){
        return (
            <aside>
                <h2>{this.state.titulo}</h2>
                <nav>
                    <ul>
                        <li><a href={this.state.link1}>{this.state.texto1}</a></li>
                        <li><a href={this.state.link2}>{this.state.texto2}</a></li>
                        <li><a href={this.state.link3}>{this.state.texto3}</a></li>
                    </ul>
                </nav>
            </aside>
        )
    }
}

export default Menu;