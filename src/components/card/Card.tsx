import React from "react";
import { FlatType } from "../../types";

import "./card.scss";

type CardProps = {
  flat: FlatType;
};

export const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="card">
      <img className="card__img" src={props.flat.image} alt="flat" />
      <div className="card__price-container">
        <div className="card__price">{props.flat.price}$</div>
        {props.flat.isGoodPrice && (
          <div className="card__good-price">Good Price</div>
        )}
      </div>
      <div className="card__information">
        <div className="card__item" style={{ color: "green" }}>
          {props.flat.description}
        </div>
        <div className="card__item">{props.flat.location}</div>
        <div className="card__date">{props.flat.date}</div>
      </div>
      <svg className="card__letter" viewBox="-17 -101 560 560">
        <path d="m462.5-5.582031h-400c-34.511719.011719-62.484375 27.988281-62.5 62.5v233.371093c.015625 34.511719 27.988281 62.492188 62.5 62.5h400c34.511719-.007812 62.484375-27.988281 62.5-62.5v-233.371093c-.015625-34.511719-27.988281-62.488281-62.5-62.5zm-400 25h400c18.003906.046875 33.453125 12.824219 36.875 30.496093l-236.875 132.003907-236.875-132.003907c3.421875-17.671874 18.871094-30.449218 36.875-30.496093zm400 308.25h-400c-20.683594-.0625-37.441406-16.816407-37.5-37.5v-212l231.375 128.996093c1.875 1.03125 3.980469 1.59375 6.125 1.628907 2.152344.023437 4.265625-.539063 6.125-1.628907l231.375-128.996093v212c-.015625 20.703125-16.796875 37.480469-37.5 37.5zm0 0" />
      </svg>
    </div>
  );
};
