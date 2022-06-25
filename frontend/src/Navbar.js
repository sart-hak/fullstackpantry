import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./images/fullstacklogo8e.png"
import "./styles/App.css"




const Navbar = () => {
    const [toggle, settoggle] = useState(false);

    return (
        <div className="Navbar">
            <nav>
                <div className="logoDiv">
                    <img src={logo} alt="logo" className="logo" />
                </div>
                <div onClick={()=> settoggle(!toggle)} className="hamburger">
                    <i className="fa-solid fa-bars"></i>
                </div>
                <ul className="navlinks">
                    <NavLink className={toggle ? "toggle" : ""} style={({ isActive }) => { return {color: isActive ? "#164A9F" : "",};}} to="/">Home</NavLink>
                    <NavLink className={toggle ? "toggle" : ""}style={({ isActive }) => { return {color: isActive ? "#164A9F" : "",};}} to="/about"> About</NavLink>
                    <NavLink className={toggle ? "toggle" : ""} style={({ isActive }) => { return {color: isActive ? "#164A9F" : "",};}} to="/services">Services & Products</NavLink>
                    <NavLink className={toggle ? "toggle" : ""} style={({ isActive }) => { return {color: isActive ? "#164A9F" : "",};}} to="/blogs">Blogs</NavLink>
                    <NavLink className={toggle ? "toggle contactMobile" : "contactMobile"} style={({ isActive }) => { return {color: isActive ? "#164A9F" : "",};}} to="/contact">Contact us</NavLink>
                    <NavLink style={({ isActive }) => { return {color: isActive ? "#fff" : "", background: isActive ? "#164A9F" : "",};}} className="contactbtn" to="/contact">Contact us</NavLink>
                </ul>
            </nav>
        </div >
    );
};

export default Navbar;
