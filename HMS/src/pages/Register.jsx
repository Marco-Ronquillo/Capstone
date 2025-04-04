import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header.jsx";
import "../design/Register.css";

function Register() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!agreedToTerms) {
      alert("You must agree to the terms and conditions");
      return;
    }

    // Send form data to backend
    axios
      .post("http://localhost:3001/register", {
        username: `${firstName} ${lastName}`,
        email,
        password,
        age: dob, // you might want to calculate age from DOB in backend
        gender,
        contact: "", // if needed, you can add more fields
        guardian: "",
        address: "",
      })
      .then((res) => {
        console.log("Registration successful:", res.data);
        navigate("/login");
      })
      .catch((err) => {
        console.error("Registration error:", err);
        alert("Registration failed. Please try again.");
      });
  };

  return (
    <>
      <Header />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&family=Cormorant+Garamond:wght@500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />

      <div className="signup-auth-container">
        <div className="signup-auth-form">
          <h1>Create Account</h1>

          <form onSubmit={handleSubmit}>
            <div className="signup-form-row">
              <div className="signup-form-group">
                <label htmlFor="first-name">First Name</label>
                <i className="fas fa-user signup-input-icon"></i>
                <input
                  type="text"
                  id="first-name"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>

              <div className="signup-form-group">
                <label htmlFor="last-name">Last Name</label>
                <i className="fas fa-user signup-input-icon"></i>
                <input
                  type="text"
                  id="last-name"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="signup-form-group">
              <label htmlFor="email">Email Address</label>
              <i className="fas fa-envelope signup-input-icon"></i>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="signup-form-row">
              <div className="signup-form-group">
                <label htmlFor="password">Password</label>
                <i className="fas fa-lock signup-input-icon"></i>
                <input
                  type="password"
                  id="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="signup-form-group">
                <label htmlFor="signup-confirm-password">Confirm Password</label>
                <i className="fas fa-lock signup-input-icon"></i>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="signup-form-row">
              <div className="signup-form-group">
                <label htmlFor="dob">Date of Birth</label>
                <i className="fas fa-calendar signup-input-icon"></i>
                <input
                  type="date"
                  id="dob"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  required
                />
              </div>

              <div className="signup-form-group">
                <label htmlFor="gender">Gender</label>
                <i className="fas fa-venus-mars signup-input-icon"></i>
                <select
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option value="">Select gender</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
            </div>

            <div className="signup-terms">
              <input
                type="checkbox"
                id="terms"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                required
              />
              <label htmlFor="terms">
                I agree to the <a href="#">Terms of Service</a> and{" "}
                <a href="#">Privacy Policy</a>
              </label>
            </div>

            <button type="submit" className="signup-submit-btn">
              CREATE ACCOUNT
            </button>

            <div className="signup-auth-switch">
              <p>
                Already have an account? <a href="/login">Sign in here</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
