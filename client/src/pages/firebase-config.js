// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBITKNoGqsDB9wvFRsbfPGpacM7fF6LNb0",
  authDomain: "auth-dev-38333.firebaseapp.com",
  databaseURL: "https://auth-dev-38333-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "auth-dev-38333",
  storageBucket: "auth-dev-38333.appspot.com",
  messagingSenderId: "128784284485",
  appId: "1:128784284485:web:deb92a84307cca25eb9c2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);