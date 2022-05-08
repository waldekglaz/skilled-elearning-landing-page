import React from "react";
import HeroImageMobile from "../../assets/image-hero-mobile.png";
import HeroImageTablet from "../../assets/image-hero-tablet.png";
import HeroImageDesktop from "../../assets/image-hero-desktop.png";
import "./HeroImage.css";

const HeroImage = () => {
  return (
    <picture>
      <source srcSet={HeroImageDesktop} media="(min-width: 1024px)" />
      <source srcSet={HeroImageTablet} media="(min-width: 658px)" />

      <img
        className="hero__img"
        src={HeroImageMobile}
        alt="woman drinkig coffee"
      />
    </picture>
  );
};

export default HeroImage;
