import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../design/DoctorLoginForm.css'; // Create this CSS file for styles

const DoctorLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Navigate to another page (e.g., dashboard) after "logging in"
        navigate('/doctorpage'); // Change this path to where you want to redirect
    };

    return (
        <div className="login-form">
            <form onSubmit={handleSubmit}>
                <h2>Login as a Doctor</h2>
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
                <div className="return">
                    <a href="/login"><i>Return</i></a>
                </div>
            </form>
        </div>
    );
};

export default DoctorLogin;
