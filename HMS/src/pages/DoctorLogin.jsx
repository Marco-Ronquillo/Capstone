import React from "react";
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import DoctorLoginForm from "../components/DoctorLoginForm.jsx";

function Login(){
    return(
        <>
            <Header/>
            <DoctorLoginForm/>
        </>
    );
};

export default Login