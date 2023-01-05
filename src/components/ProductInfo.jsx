import React from "react";
import addToCart from '@icons/bt_add_to_cart.svg'

const ProductInfo = ({ product }) => {
  return (
    <div>
      <img className="image-detail"
        src={product.images[0]}
        alt={product.title}
      />
      <div className="dots">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
      </div>
      <div className="product-info-detail">
        <p>{product.price}</p>
        <p>{product.title}</p>
        <p>
          {product.description}
        </p>
        <button className="primary-button-detail add-to-cart-button-detail">
          <img src={addToCart} />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
