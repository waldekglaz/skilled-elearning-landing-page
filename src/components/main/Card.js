import React from "react";
import "./Card.css";
import Button from "../Button";

const Card = (props) => {
  return (
    <div className="card">
      <img className="card__icon" src={props.src} alt="icon" />
      <h2 className="card__title">{props.cardTitle}</h2>
      <p className="card__text">{props.cardText}</p>
      <Button classes="btn btn--pink" />
    </div>
  );
};

export default Card;
