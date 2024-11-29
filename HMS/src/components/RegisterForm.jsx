import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../design/RegisterForm.css';

function RegisterForm() {
  const [step, setStep] = useState(1); // Tracks current form step
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");
  const [guardian, setGuardian] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { username, age, gender, contact, guardian, address, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      {step === 1 && (
        <form onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
          <h2>Register</h2>
          <div className="regform-group">
            <label htmlFor="username"><b>Username</b></label>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              value={username}
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
              value={email}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Next</button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          <div className="regform-group">
            <label htmlFor="age"><b>Age</b></label>
            <input
              type="text"
              name="age"
              placeholder="Enter Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div className="regform-group">
            <label htmlFor="gender"><b>Gender (M/F)</b></label>
            <input
              type="text"
              name="gender"
              placeholder="Enter Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            />
          </div>
          <div className="regform-group">
            <label htmlFor="contact"><b>Contact</b></label>
            <input
              type="text"
              name="contact"
              placeholder="Enter Contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </div>
          <div className="regform-group">
            <label htmlFor="guardian"><b>Guardian Number</b></label>
            <input
              type="text"
              name="guardian"
              placeholder="Enter Guardian Number"
              value={guardian}
              onChange={(e) => setGuardian(e.target.value)}
              required
            />
          </div>
          <div className="regform-group">
            <label htmlFor="address"><b>Address</b></label>
            <input
              type="text"
              name="address"
              placeholder="Enter Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="button-group">
            <button className="back" type="button" onClick={() => setStep(1)}>Back</button>
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default RegisterForm;
