import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <div className="menu-block">
            <NavLink className={"menu-link"} to="/">
                PreJunior
            </NavLink>
            <NavLink className={"menu-link"} to="/junior">
                Junior
            </NavLink>
            <NavLink className={"menu-link"} to="/juniorPlus">
                JuniorPlus
            </NavLink>
            <div className="menu"></div>
        </div>
    );
}

export default Header;
