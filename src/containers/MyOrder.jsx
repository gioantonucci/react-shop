import React from "react";
import OrderItem from "@components/OrderItem";
import arrow from '@icons/flechita.svg'

function MyOrder() {
  return (
    <aside className="my-order">
      <div className="title-container">
        <img src={arrow} alt="arrow" />
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
          <p>$150.00</p>
        </div>
        <button class="primary-button">Checkout</button>
      </div>
    </aside>
  );
}

export default MyOrder;
