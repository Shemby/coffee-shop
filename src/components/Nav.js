import React from "react";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className="nav-container">
        <nav className="nav-bar">
          <NavLink className="nav-bar__item" to="/">
            Home
          </NavLink>

          <NavLink className="nav-bar__item" to="/About">
            About
          </NavLink>

          <NavLink className="nav-bar__item" to="/Contact">
            Contact
          </NavLink>

          <NavLink className="nav-bar__item" to="/Menu">
            Menu
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default Nav;
