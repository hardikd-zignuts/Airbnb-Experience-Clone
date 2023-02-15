import React from "react";
import person from "./../assets/person-1.svg";
import star from "./../assets/Star 1.svg";
import "./card.css";

const Card = () => {
  return (
    <>
      <div className="my-3">
        <div className="card-head">
          <img src={person} alt="person" />
          <button className="card-btn">SOLD OUT</button>
        </div>
        <div className="card-data mt-2">
          <div className="card-star">
            <img src={star} alt="star" />
            <span>5.0 (6) • USA</span>
          </div>
          <div className="card-text my-2">Life lessons with Katie Zaires</div>
          <div className="card-price my-2">
            From $136 / <span className="text-muted"> person </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
