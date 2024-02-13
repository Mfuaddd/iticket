import React from "react";
import "./index.scss";

function Card({ item }) {
  console.log(new Date(item.date).toDateString().slice(4));
  const toNormalDate = (time) => {
    return new Date(time).toDateString().slice(4);
  };
  return (
    <div className="card">
      <div className="card__front">
        <img className="card__img-bg" src={item.img_bg} alt="background" />
        <img className="card__img-fr" src={item.img_fr} alt="image" />
        <div className="card__price">from {item.price}₼</div>
      </div>
      <div className="card__text">
        <div className="card__title">{item.name}</div>
        <div className="card__info">
          <div>{toNormalDate(item.date)}</div>
          <div>{item.place}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
