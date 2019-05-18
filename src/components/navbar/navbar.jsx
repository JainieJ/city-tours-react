import React from "react";
import logo from "../../logo.svg";
import "./navbar.scss";

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="city tour company" />
      <ul className="nav-links">
        <li>
          <a className="nav-link" href="/">
            home
          </a>
        </li>
        <li>
          <a className="nav-link" href="/">
            about
          </a>
        </li>
        <li>
          <a className="nav-link active" href="/">
            tours
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
