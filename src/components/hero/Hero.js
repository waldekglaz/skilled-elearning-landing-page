import React from "react";
import Button from "../Button";
import HeroImage from "./HeroImage";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__text-container">
        <h1 className="hero__title">Maximize skill, minimize budget</h1>
        <p className="hero__text text--gray">
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <Button classes="btn btn--red btn--larger" />
      </div>
      <HeroImage />
    </div>
  );
};

export default Hero;
