
import React, { useState, useEffect } from "react";
import './nav.css';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import { auth } from "../../pages/firebase-config";
import { collection, getDocs, QuerySnapshot } from "firebase/firestore";
        
function GetCurrentUser(){
  const [user, setUser] = useState("");
  const usersCollectionRef = collection(db, "users");
  useEffect(() => {
    auth.onAuthStateChanged(userlogged  => {
        if(userlogged){
          const getUsers = async () => {
            const q = query(collection(db, "users"), where("uid", "==", userlogged.uid));
            const data = await getDocs(q);
            setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
          }
          getUsers();
        }
        else {
          setUser(null);
        }
    })
  }, [])
  return user
}

const [cartdata, setcartdata] = useState([]);

if (loggeduser) {
  const getcartdata = async () => {
    const cartArray = [];
    const path = `cart-${loggeduser[0].uid}`

    getDocs(collection(db, path)).then((querysnapshot) => {
      querysnapshot.forEach((doc) => {
        cartArray.push({ ...doc.data(), id: doc.id})
      });
      setcartdata(cartArray)
    })
  }
  getcartdata();
}
  

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          RR ELECTRONICS
        </NavLink>
        <Bars />
        <NavMenu>
        
          <NavLink to='/home' activeStyle>
            Products
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/signup' activeStyle>
            Sign Up
          </NavLink>
          <NavLink to='/products' activeStyle>
           Manage products
          </NavLink>
         <NavBtn>
          <NavBtnLink  to='/login'>Sign In</NavBtnLink>
        </NavBtn>
        <NavLink to='/profile' >
            
            
            
            </NavLink>
            <NavBtn>
          <NavBtnLink  to='/cartdata'>
            CART
          
          </NavBtnLink>
        </NavBtn>
        </NavMenu>

       
      </Nav>
    </>
  );
};

export default Navbar;
