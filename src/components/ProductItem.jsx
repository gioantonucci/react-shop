import React, {useState} from "react";
import addToCart from '@icons/bt_add_to_cart.svg'

const ProdcutItem = ({products}) => {

  const [cart, setCart] = useState([])

  const handleCart = () => {
    setCart('Agregado')
  }

  return (
    <div className="product-card">
      <img
        src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="bike"
        className="product-img"
      />
      <div className="product-info">
        <div>
          <p>2</p>
          <p>Bike</p>
        </div>
        <div className="add-to-cart" onClick={handleCart} >
          <img src={addToCart} alt="add to cart" />
        </div>
        {cart}
      </div>
    </div>
  );
};

export default ProdcutItem;
