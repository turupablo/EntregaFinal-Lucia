import React from 'react'
import CardWidget from './CartWidget'; 
import torre from '../assets/torre.svg'


const NavBar = (props) => {
    
    return (
        <div>
            <nav class="navbar navbar-light bg-light text-info">

                    <img class="navbar-brand" src={torre} width="30" height="30" class="d-inline-block align-top" alt=""/>
                    <h1 class="navbar-brand">Fortin</h1>
                    <a className="nav-link hover-shadow" href="#">Camisetas</a>
                    <a className="nav-link hover-shadow" href="#">Merchandising</a>
                    <a className="nav-link hover-shadow" href="#">Indumentaria</a>
                    <CardWidget stock="3"/>

            </nav>
        </div>
    )
}

export default NavBar