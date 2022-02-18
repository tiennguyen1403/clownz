import React from "react";

import "./accessory-product-list.scss";
import ProductList from "../ProductList";

function AccessoryProductList() {
  return (
    <div className="accessory-product-list">
      <h1 className="accessory-product-list__title">
        <a href="#a">accessory</a>
      </h1>
      <div className="accessory-product-list__category">
        <a href="#a">bag</a> / <a href="#a">backpack</a> /{" "}
        <a href="#a">others</a> / <a href="#a">hat</a>
      </div>
      <ProductList />
      <button>xem tất cả accessory</button>
    </div>
  );
}

export default AccessoryProductList;
