import React, { useContext } from "react";
import AppContext from "@context/AppContext";

import close from "@icons/icon_close.png";

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);
  const handleRemove = product => {
    removeFromCart(product)
  }
  return (
    <div className="order-item">
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img onClick={() => handleRemove(product)} src={close} alt="close" />
    </div>
  );
};

export default OrderItem;
