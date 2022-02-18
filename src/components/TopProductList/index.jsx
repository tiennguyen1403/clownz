import React from "react";

import "./top-product-list.scss";
import ProductList from "../ProductList";

function TopProductList() {
  return (
    <div className="top-product-list">
      <h1 className="top-product-list__title">
        <a href="#a">top</a>
      </h1>
      <div className="top-product-list__category">
        <a href="#a">hoodie</a> / <a href="#a">sweatshirt</a> /{" "}
        <a href="#a">jacket</a> / <a href="#a">t-shirt</a> /{" "}
        <a href="#a">shirt</a>
      </div>
      <ProductList />
      <button>xem tất cả top</button>
    </div>
  );
}

export default TopProductList;
