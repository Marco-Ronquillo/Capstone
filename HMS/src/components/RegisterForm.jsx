import React, { useState } from 'react';
import '../design/RegisterForm.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert('User registered successfully!');
    } else {
      alert('Failed to register user.');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <hr />
        <div className="regform-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            placeholder=""
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="regform-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder=""
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="regform-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder=""
            value={formData.password}
            onChange={handleChange}
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
