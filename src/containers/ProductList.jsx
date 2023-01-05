import React, { useEffect, useState } from "react";
import useGetProducts from "@hooks/useGetProducts";
import ProductItem from "@components/ProductItem";


const API = "https://api.escuelajs.co/api/v1/products";

function ProductList() {
  const products = useGetProducts(API)

  return (
    <div className="cards-container">
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductList;
