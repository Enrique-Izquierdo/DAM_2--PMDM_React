import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";


class Index extends React.Component {
    render() {
      return (
        <div>
          <header>
            <div class='contInicial'></div>        
          </header>
          {/*  */}
          <main>            
            <article>
              <h1>La Ciudad de las Artes y las Ciencias</h1>
              <p>Ubicada al final del viejo cauce del río Turia, la Ciudad de las Artes y las Ciencias es un complejo arquitectónico, cultural y de entretenimiento diseñado por Santiago Calatrava y Félix Candela, junto con los ingenieros autores del diseño estructural de las cubiertas del L'Oceanografic Alberto Domingo y Carlos Lázaro.</p>
            </article>
            
            <aside>
              <h2>Edificios</h2>
              <nav>
                <ul>
                  <li><a href="#" class="menulink">Hemisferic</a></li>
                  <li><a href="#" class="menulink">Museo de las Ciencias</a></li>
                  <li><a href="#" class="menulink">Oceanografic</a></li>
                  <li><a href="#" class="menulink">Palau de les Arts</a></li>
                  <li><a href="#" class="menulink">Umbracle</a></li>
                </ul>
              </nav>
            </aside>
            
          </main>
          {/*  */}
          <footer>
            <div className='contFinal'></div>
          </footer>        
        </div>
      )
    }
  }
  

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
