import React, { useContext } from 'react'
import CardWidget from './CartWidget'; 
import { NavLink } from "react-router-dom"
import torre from '../assets/torre.svg'



const NavBar = (props) => {

    return (
        <div >
            <nav className="navbar navbar-light bg-light text-info ">

                    <NavLink className="header__link navbar-brand h1 col d-inline-block align-top" to="/"><img src={torre} width="30" height="30"  alt=""/> Fortin</NavLink>
                    <NavLink className="nav-link hover-shadow col" to="/categories/Camisetas">Camisetas</NavLink>
                    <NavLink className="nav-link hover-shadow col" to="/categories/Merchandising">Merchandising</NavLink>
                    <NavLink className="nav-link hover-shadow col" to="/checkout"><CardWidget className="nav-link hover-shadow col" stock="3"/></NavLink>
                    

            </nav>
        </div>
    )
}

export default NavBar