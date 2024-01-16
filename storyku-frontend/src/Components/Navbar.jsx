
import React from "react"
import { FaHome } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import {Nav, NavLink, NavMenu} from "./Navbar/NavbarElements"


const Navbar =() => {
    return (
        <>
            <Nav>
            <NavMenu>
                <NavLink to="/">
                <FaHome />Home
                </NavLink>
                <NavLink to="/manage">
                <FaGear /> Manage Story
                </NavLink>
            </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar;