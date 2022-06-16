import React from 'react';
import { useState, useEffect } from "react";

import {auth, db} from '../../pages/firebase-config';
import {collection, getDocs, query, where} from 'firebase/firestore';
import CartCard from "./CartCard";
import './Cart.css';


const Cart = () => {


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
    const loggeduser = GetCurrentUser();
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



    return(
        <div>
            {cartdata ? 
               <div>
                <div className='cart-head'>Produkti grozā</div>
                <div className='allcartitems'>
                    {cartdata.map((item)=> {
                        <CartCard key={item.id} itemdata={item}/>
                    })}
                </div>
               </div>
               : <p> empty cart</p>}
               </div> 
    )
}

export default Cart;