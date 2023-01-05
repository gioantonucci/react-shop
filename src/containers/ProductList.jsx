import React, { useEffect, useState } from "react";
import ProductItem from "@components/ProductItem";
import axios from "axios";

const API = "https://api.escuelajs.co/api/v1/products";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const response = await axios(API)
    setProducts(response.data)
  }, []);

  return (
    <div className="cards-container">
    {products.map(product => (
       <ProductItem />
    ))}
     
    </div>
  );
}

export default ProductList;
