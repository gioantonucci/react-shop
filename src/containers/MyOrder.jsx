import React from "react";
import Order from "../components/Order";
import OrderItem from "../components/OrderItem";

function MyOrder() {
  return (
    <aside className="my-order">
      <div className="title-container">
        <img src="./icons/flechita.svg" alt="arrow" />
        <p className="my-order-title">My order</p>
      </div>
      <div className="my-order-content">
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <div class="order-summary">
          <p>
            <span>Total</span>
          </p>
          <p>$120.00</p>
        </div>
        <button class="primary-button">Checkout</button>
      </div>
    </aside>
  );
}

export default MyOrder;
