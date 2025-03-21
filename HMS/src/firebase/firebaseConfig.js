import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBf8jGB6Y9p6Ltqat5-g4i-gbyIeBGlaZ4",
    authDomain: "capstone-55247.firebaseapp.com",
    projectId: "capstone-55247",
    storageBucket: "capstone-55247.firebasestorage.app",
    messagingSenderId: "683451741829",
    appId: "1:683451741829:web:5e4c5979c35e89c6011bec"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, RecaptchaVerifier };