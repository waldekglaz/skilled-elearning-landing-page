import React from "react";
import Logo from "../Logo";
import Button from "../Button";
import LogoLight from "../../assets/logo-light.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Logo src={LogoLight} />
      <Button classes="btn btn--medium btn--violet" />
    </footer>
  );
};

export default Footer;
