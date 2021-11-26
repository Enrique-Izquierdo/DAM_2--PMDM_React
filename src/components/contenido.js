import React from 'react';

class Contenido extends React.Component {

  componentWillUnmount(){
    alert("componentWillUnmount");
  }
  render() {
    return (
      <div>
        <h2>Componente Contenido!</h2>
      </div>
    )
  }
}

export default Contenido;