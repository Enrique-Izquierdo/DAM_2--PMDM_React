import React from "react";
import ReactPlayer from "react-player";

//Creamos el componente de clase: Contenido
class Contenido extends React.Component {
    render() {
        return (
            <main className='stContenido'>

                <p><b>La India es el segundo país del mundo con más habitantes después de China. 
                    De los 1,3 millones de habitantes de la India, más del 80 % son hindúes. 
                    Por lo tanto, no es de extrañar que esta religión haya tenido una gran influencia 
                    en la cultura actual de la India. En este artículo puede leer más información 
                    sobre algunos rituales hindúes y otras costumbres en la India.</b></p>
                <div className='stVideo'>
                    <ReactPlayer url="https://www.youtube.com/watch?v=anudUjqTKpQ" controls='true' 
                        width='497px' height='280px' />
                </div>
                <h4 className='stH4'>Religiones</h4>
                <p >La India tiene una gran variedad de religiones, culturas y grupos de población. 
                    El hinduismo (83 %), el sijismo (2 %) y el budismo (1 %) tienen su origen en 
                    la India. En el país también viven musulmanes (11 %) y cristianos (2 %). Los 
                    hindúes constituyen, con mucho, la mayor parte de la población y el hinduismo 
                    tiene una gran influencia en las costumbres y tradiciones del país.</p>
                <h4 className='stH4'>Idioma</h4>
                <p>En la India se hablan muchas lenguas y dialectos diferentes. Oficialmente, la 
                    constitución india reconoce 22 lenguas, pero además de estas lenguas reconocidas, 
                    se hablan unas 390 más. La mayoría de la gente (40 % de la población) habla hindi. 
                    El hindi es la única lengua oficial de la India, pero el inglés también desempeña un 
                    papel importante, ya que este idioma se utiliza para comunicarse con países que no 
                    tienen el hindi como lengua oficial.</p>
                <h4 className='stH4'>Ropa india</h4>
                <p>Las grandes diferencias de prosperidad y estatus en la India también afectan a la forma 
                    de vestir de los distintos grupos de población. Por ejemplo, la tela utilizada y los 
                    bordados suelen indicar si alguien es rico o pobre.<br/>
                    El sari es una prenda india muy conocida que consiste en una pieza de tela que envuelve 
                    el cuerpo de las mujeres en la India de una manera tradicional. Dependiendo de la ocasión, 
                    el sari puede ser de algodón o de seda. Los hombres de la India suelen llevar una kurta 
                    de tela khadi. El khadi es una tela de algodón, seda o lana hilada a mano. Los políticos 
                    indios suelen llevar ropa hecha de khadi, ya que este tejido se ha convertido en un elemento 
                    importante de la cultura india. La razón es que el hilado y el tejido se han convertido en 
                    símbolos de la lucha india por la libertad y la independencia. Además, el tejido tiene un 
                    efecto refrescante en verano. La tela no solo se utiliza para hacer kurtas, sino también para 
                    otras prendas como el dhoti.</p>

            </main>
        );
    }
}

export default Contenido;