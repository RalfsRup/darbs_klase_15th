import React from "react";
import { useState } from "react";

const CartCard = () => {

    const [prodquantity, setProdQuantity] = useState(1);

    const increasequantity = () => {
        setProdQuantity(prodquantity + 1)
    }
    const decreasequantity = () => {
        if (prodquantity >= 1){
            setProdQuantity(prodquantity -1)
        }
    }


    return(
        <div className="cart-prod-container">
            <div className="cart-prod-imgtitle">
                <div className="prod-image"><img src={itemdata.itemdata.products.attelsurl}/></div>
            </div>
        </div>
    )
}
export default CartCard;