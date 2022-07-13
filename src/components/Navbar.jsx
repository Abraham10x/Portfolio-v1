import React from "react";
import Logo from "../images/logo.svg"

export default function Navbar(){
    return (
        <navbar>
            <img src={Logo} alt="Logo"/>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Experience</a></li>
                <li><a href="#">Work</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <a href="#" target="_blank" rel="noopener noreferrer">Resume</a>
        </navbar>
    )
}