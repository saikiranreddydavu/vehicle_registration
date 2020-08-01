import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        //<NavLink to="/completedMatches">
        //  <h3></h3>
        //</NavLink>
      </li>
      <li>
        <NavLink to="/" exact>
          <div className="nav-links__account">
            <h3>{`${props.accounts}`}</h3>
          </div>
        </NavLink>
      </li>

      {/* <li>
        <NavLink to="/u1/places">My PLaces</NavLink>
      </li>
      <li>
        <NavLink to="/places/new">Add Place</NavLink>
      </li>
      <li>
        <NavLink to="/auth">Authenticate</NavLink>
      </li> */}
    </ul>
  );
};
export default NavLinks;
