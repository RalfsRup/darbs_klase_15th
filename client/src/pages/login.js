import React from 'react';
import { useState } from "react";
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";
import { auth } from "./firebase-config";
import { Link} from "react-router-dom"
import './login.css';
export default function Login() {
    const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
   
    <div className='login'>
      <h3> Login </h3>
        <input className='email'
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        /><br></br>
        <input className='pass'
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        /><br></br>

        <button className='button' onClick={login}> Login</button>
        <div className='a'>
        Dont have an account? <Link to="/signup">register</Link>
      </div><br></br>
      <div>
      <h4> User Logged In: </h4>
      {user?.email}
      <button onClick={logout}> Sign Out </button>
      </div>
      </div>

     
    
     
    
  );
};
