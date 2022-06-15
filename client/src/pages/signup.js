import React from 'react';
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "./firebase-config";
import { Link} from "react-router-dom";
import { collection, addDoc } from 'firebase/firestore';
import {useNavigate} from 'react-router-dom';
import './signup.css';



export default function SignUp() {
  const [email, setRegisterEmail] = useState("");
  const [password, setRegisterPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState(""); 
  const [errorMsg, setErrorMsg] = useState("");
  const [user, setUser] = useState({});

    const handleSubmit = (e)=>{
      e.preventDefault();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) =>{
    const user = userCredential.user;
    const initialcartvalue = 0;
    console.log(user);

    addDoc(collection(db, "users"), {
      email:email, password: password, cart: initialcartvalue, uid: user.uid
    }).then(()=> {
      setSuccessMsg('new user created')
      setRegisterEmail('')
      setRegisterPassword('')
      setErrorMsg('error')
    })
  })
  .catch((error)=> {
  if (error.message== 'Firebase: Error (auth/invalid-email.')
  {
    setErrorMsg('Please fill all fields')
   } 
  })
}
    

  return (
    <form className='signup-form' onSubmit={handleSubmit}>
      {successMsg && <>
        <div className='success-msg'>
        </div></>}
      {errorMsg && <>
      <div className='error-msg'>
        {errorMsg}
      </div></>}
      
    <div className='login'>
      <h3> Sign up </h3>
      <input className='email'
        placeholder="Email..."
        onChange={(event) => {
          setRegisterEmail(event.target.value);
        }}
      /><br></br>
      <input className='pass'
        placeholder="Password..."
        onChange={(event) => {
          setRegisterPassword(event.target.value);
          
        }}
      /><br></br>
 
      <button type='submit'> Sign up</button>
      <div className='a'>
        Already have an account? <Link to="/login">Log In</Link>
      </div>
     </div>
    </form>
  );
};


