import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <NavLink to="/">
          <li >Home</li>
        </NavLink>
        <NavLink to="/super-heroes">
          <li >Super-Heroes</li>
        </NavLink>
        <NavLink to="/rq-super-heroes">
          <li >RQ-Super-Heroes</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
