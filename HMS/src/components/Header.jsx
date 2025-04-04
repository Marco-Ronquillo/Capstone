import React from "react";
import logo from '../assets/LOGOOOOO.png';
import '../design/Header.css';

function Header(){  
    return(
        <header className="header">
            <div className="">

            </div>
            <div className="header-content">
                <div className="headerlogo">
                    <img src={logo} alt="Logo" />
                </div>          
            </div>

            <div className="navi-container">
                <nav className="navibar">
                    <div className="navibar-top">
                        <a href="/landingpage" className="navi-item">Home</a>
                        <a href="/pharmacy" className="navi-item">Pharmacy</a>
                        <a href="/service" className="navi-item">Book an Appointment</a>
                        <a href="/home" className="navi-item">About us</a>
                    </div>

                    <div className="navibar-divider"></div>

                    <div className="navibar-bottom">
                        <a href="/login" className="navi-login">Login</a>
                        <a href="/register" className="navi-register">Register</a>
                    </div>
                </nav>  
            </div> 
        </header>
    );
};

export default Header;
