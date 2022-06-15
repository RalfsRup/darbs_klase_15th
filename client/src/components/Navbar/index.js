
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
        </NavMenu>

       
      </Nav>
    </>
  );
};

export default Navbar;
