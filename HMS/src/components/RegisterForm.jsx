import React, { useState } from 'react';
import axios from 'axios';
import '../design/RegisterForm.css';

function RegisterForm () {
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5173/register', {username, email, password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="regform-group">
          <label htmlFor="username"><b>Username</b></label>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="regform-group">
          <label htmlFor="email"><b>Email</b></label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="regform-group">
          <label htmlFor="password"><b>Password</b></label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
        <div className="alracc">
          <p>Already have an account? <a href="/login">Sign in</a></p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
  