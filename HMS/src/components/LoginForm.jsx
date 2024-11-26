import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../design/LoginForm.css'; // Create this CSS file for styles

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Navigate to another page (e.g., dashboard) after "logging in"
        navigate('/patientpage'); // Change this path to where you want to redirect
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
