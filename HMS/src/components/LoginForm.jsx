import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import '../design/LoginForm.css'; // Create this CSS file for styles

function LoginForm () {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    axios.post("http://localhost:3001/login", { email, password })
        .then(result => {
            if (result.data && result.data._id) { 
                // Assuming the backend returns the user object on success
                localStorage.setItem('patientId', result.data._id); // Store patient ID in localStorage
                navigate("/patientpage"); // Navigate to the patient page
            } else if (result.data === "The password is incorrect" || result.data === "No record existed") {
                alert("You are not registered to this service");
                navigate("/login");
            } else {
                alert("Login failed. Please try again.");
            }
        })
        .catch(err => console.error(err));
};

    return (
        <div className="login-form">
            <form onSubmit={handleSubmit}>
                <h2>Login as a Patient</h2>
                <div className="form-group">
                    <label htmlFor="email"><b>Email</b></label>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password"><b>Password</b></label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
                <div className="noacc">
                    <p>Don't have an account? <a href="/register">Register</a></p>
                </div>
                <div className="logdoc">
                    <a href="/doctorlogin">Login as a Doctor</a>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
