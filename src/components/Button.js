import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <a className={props.classes} href="/">
      Get Started
    </a>
  );
};

export default Button;
