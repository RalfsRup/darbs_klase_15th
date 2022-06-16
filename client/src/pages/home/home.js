import React from 'react';
import { useState, useEffect } from "react";
import "./home.css";
import { db } from "../firebase-config";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { auth } from "../firebase-config";
import Footer from '../../components/Footer/footer';
import { async } from '@firebase/util';
function Home() {
  
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
  
  
  const [products, setProd] = useState([]);
  const [produkts, setProdukts] = useState([]);
  const productsCollectionRef = collection(db, "products");
  const productCollectionRef= collection(db, "products.produkts");
  const addtocart = () => {
    if(loggeduser) {
      addDoc(collection(db, `cart-${loggeduser[0].uid}`),{
        products, quantity:1
      }).then(()=> {
        alert("produkts pievienots grozam")
      })
    }
    else{
      alert("ielogojieties kontā");
    }
  }

  useEffect(() => {
    const getProd = async () => {
      const data = await getDocs(productsCollectionRef);
      setProd(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getProd();
  }, []);

    return (
      <div className="App">
    
        
          <br></br>
      {products.map((product) => {
        return (
          
          <div>
            
            {" "}
            <div className='products'>
                <div className='product'>
                   <img src={product.attelsurl} alt="Italian Trulli"></img>
                   <p className='tips'>{product.tips}</p>
                   <p className='nosaukums'>{product.nosaukums}</p>
                   <p className='cena'>{product.cena} €</p>
                   <button className='button' onClick={addtocart}> Pievienot grozam</button>
                </div>

            </div>
         
          </div>
          
        );
      })}
  
      </div>
  );
}

  export default Home;