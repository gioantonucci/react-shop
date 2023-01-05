import React, { useState } from "react";
import addToCart from "@icons/bt_add_to_cart.svg";
import ProductList from "../containers/ProductList";

const ProdcutItem = ({ product }) => {
  const [cart, setCart] = useState([]);

  const handleCart = () => {
    setCart("Agregado");
  };

  return (
    <div className="product-card" key={product.id}>
      <img
        src={product.images[0]}
        alt={product.title}
        className="product-img"
      />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <div className="add-to-cart" onClick={handleCart}>
          <img src={addToCart} alt="add to cart" />
        </div>
        {cart}
      </div>
    </div>
  );
};

export default ProdcutItem;
