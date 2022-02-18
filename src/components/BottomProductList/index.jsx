import React from "react";

import "./bottom-product-list.scss";
import ProductList from "../ProductList";

function BottomProductList() {
  return (
    <div className="bottom-product-list">
      <h1 className="bottom-product-list__title">
        <a href="#a">bottom</a>
      </h1>
      <div className="bottom-product-list__category">
        <a href="#a">jeans &#38; denim</a> / <a href="#a">pants</a>
      </div>
      <ProductList />
      <button>xem tất cả bottom</button>
    </div>
  );
}

export default BottomProductList;
