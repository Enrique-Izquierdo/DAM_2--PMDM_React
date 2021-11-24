import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";


class Index extends React.Component {
    constructor(props){
      super(props);
      this.state={
        titulo: "constructor() + render()",
      };
      this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(){
      setTimeout(() => {
        document.getElementById("titulo").innerHTML="componentDidMount()";
      }, 4000);
    }
  
    handleClick(event){
      event.preventDefault();
      this.setState({titulo: "Actualización: cambiamos componente con el Evento"});
      document.getElementById("titulo").innerHTML="componentDidMount()";
    }

    componentDidUpdate(prevState){
        if(prevState.titulo !== this.state.titulo){
          setInterval(() => {
            this.setState({titulo: "componentDidUpdate()"});
          }, 6000);
        }
    }
    

    render() {
      return (
        <main>
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--BZEJQLnh--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/u9oj57ygu7tw0ivpqrzy.jpg" alt="imagen"/>
          <h1 id="titulo" onClick={this.handleClick}>{this.state.titulo}</h1>
        </main>
        )
    }
  }
  

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
