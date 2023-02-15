import React from "react";
import "./../App.css";
import logo from './../assets/airbnb.svg'

const Navbar = () => {
  return (
    <>
      <nav>
        <img src={logo} alt="img-logo" />
      </nav>
    </>
  );
};

export default Navbar;
