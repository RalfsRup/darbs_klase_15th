import React, {useState, useEffect} from "react";

import {auth, db} from '../../pages/firebase-config';
import {collection, getDocs, query, where} from 'firebase/firestore';
import CartCard from "./CartCard";
import './Cart.css';


const [cartdata, setcartdata] = useState([]);



const Cart = () => {
    return(
        <div>
            <p>
                Cart
            </p>
        </div>
    )
}

export default Cart;