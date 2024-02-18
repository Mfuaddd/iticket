import React from "react";
import HeartSvg from "../../assets/icons/HeartSvg";
import ShareSvg from "../../assets/icons/ShareSvg";
import "./index.scss";

function DetailWelcome({ detail_img,price }) {
  return (
    <div className="detail-welcome">
      <div className="container-1400 detail-welcome__wrapper">
        <div>
          <img className="detail-welcome__image" src={detail_img} alt="" />
        </div>
        <div className="detail-welcome__control">
          <div className="detail-welcome__price">from {price} ₼</div>
          <div className="detail-welcome__heart detail-welcome__button">
            <HeartSvg />
          </div>
          <div className="detail-welcome__share detail-welcome__button">
            <ShareSvg/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailWelcome;
