import React from "react";
import ProductInfo from "../components/ProductInfo";
import '../styles/ProductDetail.scss'

function ProductDetail() {
  return (
    <aside class="product-detail">
      <div class="product-detail-close">
        <img src="../icons/icon_close.png" alt="close" />
      </div>
      <ProductInfo />
    </aside>
  );
}

export default ProductDetail;
