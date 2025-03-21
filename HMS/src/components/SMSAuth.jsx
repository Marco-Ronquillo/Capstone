// src/components/SMSAuth.jsx
import React, { useState } from "react";
import { signInWithPhoneNumber } from "firebase/auth";
import { auth, RecaptchaVerifier } from "../firebase/firebaseConfig";

const SMSAuth = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmation, setConfirmation] = useState(null);

  const sendOTP = async () => {
    try {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
      });
      const formattedPhone = `+63${phone.replace(/\D/g, "")}`;
      const confirmationResult = await signInWithPhoneNumber(auth, formattedPhone, window.recaptchaVerifier);
      setConfirmation(confirmationResult);
      alert("OTP sent!");
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  const verifyOTP = async () => {
    try {
      await confirmation.confirm(otp);
      alert("Authentication Successful!");
    } catch (error) {
      alert("Invalid OTP");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Philippine Phone Number (e.g., 9123456789)"
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={sendOTP}>Send OTP</button>
      <input
        type="text"
        placeholder="Enter OTP"
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={verifyOTP}>Verify OTP</button>
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default SMSAuth;