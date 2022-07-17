import React from "react";
import logo from "../../assets/img/lecrack.jpg";
import "./NavBar.css";

 /* TODO: Cambiar por la opcion de react router */


const NavBar = () => {
  return (
    <nav>
        <a href="#">
        <img className="brand-logo" src={logo} />
        </a>
        <ul>
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li>
        </ul>
    </nav>
  );
};
export default NavBar;
