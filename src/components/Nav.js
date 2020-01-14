import React from "react";
import { NavLink, BrowserRouter } from "react-router-dom";

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="nav-bar">
        <BrowserRouter>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
          <NavLink to="/Menu">Menu</NavLink>
        </BrowserRouter>
      </nav>
    );
  }
}
