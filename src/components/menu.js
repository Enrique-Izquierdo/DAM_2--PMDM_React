import React from "react";

class Menu extends React.Component {
    render() {
        return (
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
        );
    }
}

export default Menu;