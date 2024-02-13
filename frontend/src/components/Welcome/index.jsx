import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./index.scss";
import "swiper/scss";
import ArrowSvg from "../../assets/icons/ArrowSvg";

function Welcome() {
  return (
    <div className="welcome">
      <div className="container-1400 welcome__wrapper">
        <Swiper
          className="welcome__swiper"
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: ".welcome__swiper__next",
            prevEl: ".welcome__swiper__prev",
            disabledClass: "swiper-button-disabled",
          }}
          loop={true}
        >
          <SwiperSlide>
            <img
              className="no-select"
              src="https://cdn.iticket.az/event/slide/IXpemoVo6gueJRGurjrYdfroAgr5WIQv3Xe9ndRq.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="no-select"
              src="https://cdn.iticket.az/event/slide/0rDjeipqrWWIYYQ5jN8xhhqQALKVsmDC7Wl0BIt9.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="no-select"
              src="https://cdn.iticket.az/event/slide/6SPSNi5y6MhMzH6Cmj9CY1NKzOnWfZyRbtvE8X7h.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
        <div className="welcome__swiper__prev welcome__swiper__button">
          <ArrowSvg />
        </div>
        <div className="welcome__swiper__next welcome__swiper__button">
          <ArrowSvg />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
