import React from "react";
import OrderItem from "../components/OrderItem";
import '../styles/Checkout.scss'

function Checkout() {
  return (
    <div className="checkout">
    <div className="checkout-container">
    <h1 className="checkout-title">My order</h1>
    <div className="checkout-content">
      <div className="order-summary">
        <p>
          <span>02.10.21</span>
          <span>6 articles</span>
        </p>
        <p>$120.00</p>
        </div> 
     </div>
     <OrderItem />
     <OrderItem />
     <OrderItem />
     <OrderItem />
     </div>
    </div>
  );
}

export default Checkout;
