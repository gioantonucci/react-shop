import React, { useContext } from "react";
import addToCartImg from "@icons/bt_add_to_cart.svg";
import AppContext from "@context/AppContext";

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleCart = (item) => {
    addToCart(item);
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
        <div className="add-to-cart" onClick={() => handleCart(product)}>
          <img src={addToCartImg} alt="add to cart" />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
