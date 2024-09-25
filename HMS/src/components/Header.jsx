import React from "react";
import '../design/Header.css';

function Header(){  
    return(
        <header className="header">            
            <div className="logo">    Hospital Management System Core II     </div>
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-item"><a href="/home">Home</a></li>
                    <li className="navbar-item"><a href="/about">About</a></li>
                    <li className="navbar-item"><a href="/services">Services</a></li>
                    <li className="navbar-item"><a href="/login">Login</a></li>
                    <li className="navbar-item"><a href="/register">Register</a></li>
                </ul>
            </nav>   
        </header>
    );
};

export default Header