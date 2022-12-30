import React from "react";
import "@styles/Order.scss";
import arrow from '@icons/flechita.svg'

function Order() {
  return (
    <div className="order">
      <p>
        <span>02.10.2021</span>
        <span>6 articles</span>
      </p>
      <p>$120.00</p>
      <img src={arrow} alt="arrow" />
    </div>
  );
}

export default Order;
