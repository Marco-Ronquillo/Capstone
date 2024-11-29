import React from "react";
import logo from '../assets/LOGOOOOO.png'
import AdminLoginForm from "../components/AdminLoginForm.jsx";

function AdminLogin () {
    return (
        <>
            <header className="aheader">
                <div className="aheader-content">
                    <div className="aheaderlogo">
                        <img src={logo} alt="Logo" />
                    </div>          
                    <div className="aheadername">
                        <p>NODADO GENERAL HOSPITAL</p>
                    </div>
                </div>
            </header>
            
            <AdminLoginForm/>
        </>
    )
}

export default AdminLogin