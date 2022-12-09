import React from "react";
import "../Navbar.css"
import { NavLink} from 'react-router-dom'

function Navbar(){

    return(
        <div className="navbar">
           <div className="organics">
            <h1>VegMart</h1>
            </div> 
            <div className="nav-components">
                
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/">About</NavLink>
                </li>
                <li>
                    <NavLink to="/products">Products</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
            </ul>  
            </div>
        </div>
    )

}

export default Navbar;