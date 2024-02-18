import React from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";

function Card({ item, width, height }) {
  const navigate = useNavigate();
  const toNormalDate = (time) => {
    return new Date(time).toDateString().slice(4);
  };
  return (
    <div
      className="card"
      style={{ width, height }}
      onClick={() => navigate(`/detail/${item._id}`)}
    >
      <div className="card__front">
        <img className="card__img-bg" src={item?.img_bg} alt="background" />
        <img className="card__img-fr" src={item?.img_fr} alt="image" />
        <div className="card__price">from {item?.price}₼</div>
      </div>
      <div className="card__text">
        <div className="card__title">{item?.name}</div>
        <div className="card__info">
          {toNormalDate(item?.date)}
          <span className="card__info__place">• {item?.place}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
