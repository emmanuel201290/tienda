import React from "react";
import "./header.css";
import Logo from "../../img/NuevoLogo.PNG";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return(
<header className="header">
   <nav className = "nav">
   <img src={Logo} alt="logo" className="logo nav-link"/>
     <ul className="nav-menu">

     <li className="nav-menu-item">
       <NavLink to ="/home">
         <a className="nav-menu-link nav-link"><i class="fa-solid fa-house"></i>Inicio</a>
        </NavLink>
        </li>

        <li className="nav-menu-item">
       <NavLink to ="/ofertas">
         <a className="nav-menu-link nav-link"><i class="fa-solid fa-gifts"></i>Oferta</a>
        </NavLink>
        </li>

        <li className="nav-menu-item">
       <NavLink to ="/nuevo-registro">
         <a className="nav-menu-link nav-link"><i class="fa-solid fa-user-plus"></i>Inscribirse</a>
        </NavLink>
        </li>
     </ul>
   </nav>
 </header>
    );
};
export default Header;