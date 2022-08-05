import React from "react";
import logo from "../../assets/img/lecrack.jpg";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <img className="brand-logo" src={logo} />
      </Link>
      <ul>
        <li>
          <NavLink
            to="/categoria/calzado"
            activeClassName="currentCategory"
            className="text-white"
          >
            Calzado
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categoria/remeras"
            activeClassName="currentCategory"
            className="text-white"
          >
            Remeras
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categoria/accesorios"
            activeClassName="currentCategory"
            className="text-white"
          >
            Accesorios
          </NavLink>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};
export default NavBar;
