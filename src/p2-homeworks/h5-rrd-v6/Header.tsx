import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div>
            <NavLink to="/">PreJunior</NavLink>
            <NavLink to="/junior">Junior</NavLink>
            <NavLink to="/juniorPlus">JuniorPlus</NavLink>
        </div>
    );
}

export default Header;
