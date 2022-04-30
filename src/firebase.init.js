// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2O-QR3OR0eOd_hOQF8lTOFxF2-j59LPU",
  authDomain: "ema-john-again-996c0.firebaseapp.com",
  projectId: "ema-john-again-996c0",
  storageBucket: "ema-john-again-996c0.appspot.com",
  messagingSenderId: "484459455604",
  appId: "1:484459455604:web:f55aca438bc5734e845d21",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
