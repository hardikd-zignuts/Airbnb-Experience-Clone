import React from "react";
import gallery from "../assets/Image Grid.svg";

const Hero = () => {
  return (
    <>
      <div className="hero-header mt-5">
        <img className="mb-5" src={gallery} alt="gallery" />
      </div>
      <div className="container">
        <h3 className="hero-title">Online Experience</h3>
        <p className="hero-text">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </>
  );
};

export default Hero;
