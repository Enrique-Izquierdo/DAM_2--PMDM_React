import React from 'react';

//Creamos el componente de clase: Menu
class Menu extends React.Component {
    render() {
        return (
            <div>
                <img src={require('./img/india_bandera.jpg').default} alt='Foto de la bandera de la India' width='100%' height='100%' title='Bandera de la India'/>
                <nav>
                    <table>
                        <tr><th><h3 class='stH4'>Enlaces de interés:</h3></th></tr>
                        <tr>                                                      
                            <ul>
                                <li><a href="https://www.lasociedadgeografica.com/blog/viajes-india/tradiciones-curiosas-de-la-india/">Tradiciones curiosas de la India</a></li>
                                <li><a href="https://www.vuelaviajes.com/costumbres-de-la-india/">Costumbres de la India</a></li>
                                <li><a href="https://www.lavanguardia.com/ocio/viajes/20180116/4435606747/guia-basica-viaja-primera-vez-india.html">Guía básica para viajar por primera vez a la India</a></li>
                                <li><a href="http://www.exteriores.gob.es/Portal/es/ServiciosAlCiudadano/SiViajasAlExtranjero/Paginas/DetalleRecomendacion.aspx?IdP=86">Recomendaciones para viajar a República de la India</a></li>
                            </ul>                            
                        </tr>
                    </table>
                </nav>             
            </div>        
        );
    }
}

export default Menu;