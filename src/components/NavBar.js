import React, { useContext } from 'react'
import CardWidget from './CartWidget'; 
import { NavLink } from "react-router-dom"
import torre from '../assets/torre.svg'



const NavBar = (props) => {

    return (
        <div >
            <nav className="navbar navbar-light bg-light text-info ">

                    <NavLink className="header__link navbar-brand h1 col d-inline-block align-top" to="/"><img src="https://firebasestorage.googleapis.com/v0/b/app-camisetas-coder.appspot.com/o/torre.svg?alt=media&token=cf6e3d53-203d-434f-9b9d-20813446ef4d" width="30" height="30"  alt=""/> Fortin</NavLink>
                    <NavLink className="nav-link hover-shadow col" to="/categories/Camisetas">Camisetas</NavLink>
                    <NavLink className="nav-link hover-shadow col" to="/categories/Merchandising">Merchandising</NavLink>
                    <NavLink className="nav-link hover-shadow col" to="/checkout"><CardWidget className="nav-link hover-shadow col"/></NavLink>
                    

            </nav>
        </div>
    )
}

export default NavBar