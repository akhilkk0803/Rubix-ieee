import React, { useState } from "react";
import logo from "../asserts/praj_V.jpg";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import Intro from "./intro";
import ButtonGroup from "./Join";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleLinkClick = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <NavLink to="/">
        <img src={logo} alt="logo" className="logo" />
      </NavLink>
      <div className="menu-icon" onClick={toggleMenu}>
        <i className={showMenu ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={showMenu ? "nav-links show" : "nav-links"}>
        <li>
          <Link to="/" onClick={() => handleLinkClick({ Intro })}>
            Feed
          </Link>
        </li>
        <li>
          <Link to="/auth" target={"_blank"}>
            Sign up
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
