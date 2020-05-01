import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = { color: "orange" };
  return (
    <nav>
      <NavLink activeStyle={activeStyle} exact to="/">
        Home
      </NavLink>{" "}
      {" | "}
      <NavLink activeStyle={activeStyle} to="/coursesClassComponent">
        Courses Class Component
      </NavLink>{" "}
      {" | "}
      <NavLink activeStyle={activeStyle} to="/coursesFunctionComponent">
        Courses Function Component
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/about">
        About
      </NavLink>
    </nav>
  );
}

export default Header;
