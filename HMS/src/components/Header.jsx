import React from "react";
import logo from '../assets/LOGOOOOO.png';
import '../design/Header.css';

function Header(){  
    return(
        <header className="header">
            <div className="header-content">
                <div className="headerlogo">
                    <img src={logo} alt="Logo" />
                </div>          
                <div className="headername">
                    <p>NODADO GENERAL HOSPITAL</p>
                </div>
            </div>
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-item"><a href="/services">Home</a></li>
                    <li className="navbar-item"><a href="/home">About us</a></li>
                    <li className="navbar-item"><a href="/login">Login</a></li>
                    <li className="navbar-item"><a href="/register">Register</a></li>
                </ul>
            </nav>   
        </header>
    );
};

export default Header;
