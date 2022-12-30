import React from "react";
import ProductInfo from "@components/ProductInfo";
import close from '@icons/icon_close.png'
import '@styles/ProductDetail.scss'


function ProductDetail() {
  return (
    <aside class="product-detail">
      <div class="product-detail-close">
        <img src={close} alt="close" />
      </div>
      <ProductInfo />
    </aside>
  );
}

export default ProductDetail;
