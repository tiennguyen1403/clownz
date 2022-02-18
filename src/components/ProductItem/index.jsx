import React from "react";
import numeral from "numeral";
import { useNavigate } from "react-router-dom";

import "./product.scss";

function ProductItem({ prod }) {
  const navigate = useNavigate();

  const handleDirect = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="product" onClick={() => handleDirect(prod?.id)}>
      <div className="product-thumb">
        <img src={prod?.imageUrl} alt="" />
      </div>
      <div className="product-info">
        <p className="product-info__category">{prod?.category}</p>
        <p className="product-info__name">{prod?.name}</p>
        <p className="product-info__price">
          {numeral(prod?.price).format(0, 0)}
          <sup>₫</sup>
        </p>
      </div>
      <div className="product-detail">
        <button>Chi tiết</button>
      </div>
    </div>
  );
}

export default ProductItem;
