import React, { useEffect, useState } from "react";
import "./index.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/scss";
import ArrowSvg from "../../assets/icons/ArrowSvg";
import Card from "../Card";

function HomeSection({ section, header, endpoint, bg }) {
  const [apiData, setApiData] = useState([]);

  const getApiData = async () => {
    const res = await fetch(`http://localhost:3000/${endpoint}`);
    const data = await res.json();
    setApiData(data);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="home-section" style={bg ? null : { background: "none" }}>
      <div className="home-section__header container-1200">
        <h3>{header}</h3>
      </div>
      <div className="home-section__body">
        <Swiper
          className="home-section__swiper"
          modules={[Navigation]}
          spaceBetween={0}
          centeredSlides={true}
          slidesPerView={"auto"}
          navigation={{
            nextEl: `.${section}__swiper__next`,
            prevEl: `.${section}__swiper__prev`,
            disabledClass: "swiper-button-disabled",
          }}
          loop={true}
        >
          {/* <SwiperSlide className="popular__swiper__slide">
            <PopularCard />
          </SwiperSlide> */}
          {apiData &&
            apiData.map((item) => {
              return (
                <SwiperSlide
                  key={item._id}
                  className="home-section__swiper__slide"
                >
                  <Card item={item} />
                </SwiperSlide>
              );
            })}
        </Swiper>
        <div
          className={`${section}__swiper__prev home-section__swiper__prev home-section__swiper__button`}
        >
          <ArrowSvg />
        </div>
        <div
          className={`${section}__swiper__next home-section__swiper__next home-section__swiper__button`}
        >
          <ArrowSvg />
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
