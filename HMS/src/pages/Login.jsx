import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from '../components/Header.jsx';
import '../design/Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
        <>
            <Header />
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&family=Cormorant+Garamond:wght@500;600;700&display=swap" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"></link>

            <div className="login-auth-container">
                <div className="login-auth-form">
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="login-form-group">
                            <label htmlFor="email">Email Address</label>
                            <i className="fas fa-envelope login-input-icon"></i>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address"
                            />
                        </div>

                        <div className="login-form-group">
                            <label htmlFor="password">Password</label>
                            <i className="fas fa-lock login-input-icon"></i>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                            />
                        </div>

                        <div className="login-remember-forgot">
                            <div className="login-remember-me">
                                <input type="checkbox" id="remember" />
                                <label htmlFor="remember">Remember me</label>
                            </div>
                            <a href="#" className="login-forgot-password">Forgot password?</a>
                        </div>

                        <button type="submit" className="login-submit-btn">SIGN IN</button>

                        <div className="login-auth-switch">
                            <p>Don't have an account? <a href="/register">Register here</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
