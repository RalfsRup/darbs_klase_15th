import React from 'react';
import { useState, useEffect } from "react";
import "./home.css";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
} from "firebase/firestore";
import { auth } from "../firebase-config";
import Footer from '../../components/Footer/footer';
function Home() {
  
  const user = auth.currentUser;
  
  const [products, setProd] = useState([]);
  const productsCollectionRef = collection(db, "products");



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
                   <button className='button'> Pirkt</button>
                </div>

            </div>
         
          </div>
          
        );
      })}
  
      </div>
  );
}

  export default Home;