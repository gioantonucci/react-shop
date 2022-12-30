import React from "react";
import ProdcutItem from "@components/ProductItem";

function ProductList() {
  return (
    <div className="cards-container">
      <ProdcutItem />
      <ProdcutItem />
      <ProdcutItem />
    </div>
  );
}

export default ProductList;
