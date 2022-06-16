import React from 'react';
import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  addDoc,

} from "firebase/firestore";
import './products.css';
function Prod() {
 

  const [products, setProd] = useState([]);
  const productsCollectionRef = collection(db, "products");
 
  const deleteProduct = async (id) => {
    const prodDoc = doc(db, "products", id);
    await deleteDoc(prodDoc);
  };


  useEffect(() => {
    const getProd = async () => {
      const data = await getDocs(productsCollectionRef);
      setProd(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getProd();
  }, []);

    return (
      <div className="App">

      {products.map((product) => {
        return (
           
          <div>
              
            {" "}
            <table>
  <tr>
    <th>nosaukums</th>
    <th>tips</th>
    <th>Cena</th>
    <th>Iestatit</th>
  </tr>
  <tr>
    <td>{product.nosaukums}</td>
    <td>{product.tips}</td>
    <td>{product.cena}</td>
    <td> <button className='del' onClick={() => {deleteProduct(product.id);}}>X</button>
    </td>
  </tr>
  <tr>
  </tr>
</table>
        
      </div>
          
        );
      })}
      
    </div>
    
  );
}

  export default Prod;