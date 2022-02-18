import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/scss/navigation";
import "./productlist.scss";
import ProductItem from "../ProductItem";
import Loader from "../Loader";

import SwiperCore, { Autoplay, Navigation } from "swiper";

SwiperCore.use([Autoplay, Navigation]);

function ProductList({ productList }) {
  if (!productList) return <Loader />;
  return (
    <div className="productlist">
      <div className="product-cards">
        {productList.map((prod, index) => (
          <ProductItem key={index} prod={prod} />
        ))}
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
        }}
        className="mySwiper"
      >
        {productList.map((prod, index) => (
          <SwiperSlide key={index}>
            <ProductItem prod={prod} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductList;
