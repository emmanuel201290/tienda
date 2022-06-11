import React from "react";
import "./header.css";
import Logo from "../../img/NuevoLogo.PNG";

const Header = () => {
    return(
<header className="header">
   <nav className = "nav">
   <img src={Logo} alt="logo" className="logo nav-link"/>
     <ul className="nav-menu">
        <li className="nav-menu-item">
        <a href="Inicio" className="nav-menu-link nav-link"><i class="fa-solid fa-house"></i>Inicio</a>
        </li>
        <li className="nav-menu-item">
        <a href="/ofertas" className="nav-menu-link nav-link"><i className="fa-solid fa-gifts"></i>Ofertas</a>
        </li>
        <li className="nav-menu-item">
        <a href="/nuevo-registro" className="nav-menu-link nav-link"><i class="fa-solid fa-user-plus"></i>Inscribirse</a>
        </li>
     </ul>
   </nav>
 </header>
    );
};
export default Header;