import React from "react";

import "./category.scss";

function Category() {
  return (
    <div className="category">
      <div className="category-top">
        <img
          src="https://bizweb.dktcdn.net/100/414/728/themes/803486/assets/ant_index_banner_1.jpg?1642756847417"
          alt=""
        />
        <div className="category-content">
          <p>top</p>
          <a href="#a">xem thêm</a>
        </div>
      </div>
      <div className="category-bottom">
        <img
          src="https://bizweb.dktcdn.net/100/414/728/themes/803486/assets/ant_index_banner_2.jpg?1642756847417"
          alt=""
        />
        <div className="category-content">
          <p>bottom</p>
          <a href="#a">xem thêm</a>
        </div>
      </div>
      <div className="category-accessory">
        <img
          src="https://bizweb.dktcdn.net/100/414/728/themes/803486/assets/ant_index_banner_3.jpg?1642756847417"
          alt=""
        />
        <div className="category-content">
          <p>accessory</p>
          <a href="#a">xem thêm</a>
        </div>
      </div>
    </div>
  );
}

export default Category;
