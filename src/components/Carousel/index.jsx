import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/scss/navigation";
import "./carousel.scss";

import SwiperCore, { Autoplay, Navigation } from "swiper";

SwiperCore.use([Autoplay, Navigation]);

function Carousel() {
  return (
    <div className="carousel">
      <Swiper
        slidesPerView={1}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://bizweb.dktcdn.net/100/414/728/themes/803486/assets/slider_1.jpg?1642756847417"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://bizweb.dktcdn.net/100/414/728/themes/803486/assets/slider_2.jpg?1642756847417"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://bizweb.dktcdn.net/100/414/728/themes/803486/assets/slider_4.jpg?1642756847417"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
