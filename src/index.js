import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Contenido from './components/contenido';

class Index extends React.Component {
  constructor(props){
    super(props);
    this.state={
      mostrar:false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    event.preventDefault();
    this.setState({mostrar:!this.state.mostrar})
  }

  render() {
    return (
      <div>
        <h1 onClick={this.handleClick}>Componente Index</h1>
          {this.state.mostrar ? <Contenido/> : null}
      </div>
    )
  }
}


ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
