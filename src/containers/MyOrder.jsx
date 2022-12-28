import React from "react";
import Order from "../components/Order";

function MyOrder() {
  return (
  <div className="my-order">
    <div className="my-order-container">
      <h1 className="title">My orders</h1>
      <div className="my-order-content">
      <Order/>
      <Order/>
      <Order/>
      </div>
    </div>
  </div>

  );
}

export default MyOrder;
