// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4nP9uyGmwJVOmU7flUa27o9V9jSxa_e0",
  authDomain: "project-react-3e7c3.firebaseapp.com",
  projectId: "project-react-3e7c3",
  storageBucket: "project-react-3e7c3.appspot.com",
  messagingSenderId: "628432545494",
  appId: "1:628432545494:web:000b5c9846d6551cd78b77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)