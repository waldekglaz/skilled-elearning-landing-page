import React from "react";
import logoDarkUrl from "../../assets/logo-dark.svg";
import Logo from "../Logo";
import Button from "../Button";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Logo src={logoDarkUrl} />
      <Button classes="btn btn--medium btn--dark" />
    </header>
  );
};

export default Header;
