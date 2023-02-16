import React from "react";
import star from "./../assets/Star 1.svg";
import "./card.css";

const Card = ({img,price,title,starCount,reviewCount,country}) => {
  return (
    <>
      <div className="my-3">
        <div className="card-head">
          <img src={img} alt="person" />
          <button className="card-btn">SOLD OUT</button>
        </div>
        <div className="card-data mt-2">
          <div className="card-star">
            <img src={star} alt="star" />
            <span>{starCount} ({reviewCount}) • {country}</span>
          </div>
          <div className="card-text my-2">{title}</div>
          <div className="card-price my-2">
            From {price} / <span className="text-muted"> person </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
