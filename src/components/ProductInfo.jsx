import React from "react";
import addToCart from '@icons/bt_add_to_cart.svg'

const ProductInfo = () => {
  return (
    <div>
      <img className="image-detail"
        src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="bike"
      />
      <div className="dots">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
      </div>
      <div className="product-info-detail">
        <p>$35,00</p>
        <p>Bike</p>
        <p>
          With its functional and practical, this bike also fulfills a
          decorative function, adding personality and a retro-vintage aesthetic
          to your hall or workspace.
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
