import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Contenido from './components/contenido';
import Menu from './components/menu';

class Index extends React.Component{
  render(){
    return(
      <main>
        <Contenido />
        <Menu />
      </main>
    );
  }
}


ReactDOM.render(
  <Index />,
  document.getElementById('root')
);