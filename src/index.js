import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Encabezado from "./components/encabezado";
import Contenido from './components/contenido';
import PiePagina from './components/piePagina';


class Index extends React.Component {
    render() {
      return (
        <div>
          <Encabezado/>
          <Contenido/>
          <PiePagina/>   
        </div>
      )
    }
  }
  

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
