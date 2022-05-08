import React from "react";

import "./Logo.css";

const Logo = (props) => {
  return <img className="logo" src={props.src} alt="logo-alt" />;
};

export default Logo;
