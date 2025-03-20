import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import '../design/AdminLoginForm.css';

const AdminLoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/adminlogin", { email, password })
        .then(result => {
            console.log(result)
            if(result.data === "Success"){
                navigate("/adminpage")
            }else{
                navigate("/admin")
                alert("You are not registered to this service")

            }
        })
        .catch(err => console.log(err))
    };

    return (
        <div className="login-form">
            <form onSubmit={handleSubmit}>
                <h2>Login as an Admin</h2>
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

export default AdminLoginForm;