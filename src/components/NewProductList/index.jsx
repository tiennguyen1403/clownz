import React from "react";

import "./new-product-list.scss";
import ProductList from "../ProductList";

function NewProductList({ productList }) {
  return (
    <div className="new-product-list">
      <h1 className="new-product-list__title">
        <a href="#a">new arrival</a>
      </h1>
      <div className="new-product-list__category">
        <a href="#a">top</a> / <a href="#a">bottom</a> /{" "}
        <a href="#a">accessory</a>
      </div>
      <ProductList productList={productList} />
      <button>xem tất cả new arrival</button>
    </div>
  );
}

export default NewProductList;
