import React, { useContext } from "react";
import OrderItem from "@components/OrderItem";
import AppContext from "@context/AppContext";
import arrow from "@icons/flechita.svg";

const MyOrder = () => {
  const { state } = useContext(AppContext);
  const sumTotal = () => {
    const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum
  };
  return (
    <aside className="my-order">
      <div className="title-container">
        <img src={arrow} alt="arrow" />
        <p className="my-order-title">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.map((product) => (
          <OrderItem product={product} key={`orderItem-${product.id}`} />
        ))}

        <div class="order-summary">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button class="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
