import React from "react";
import { FlatType } from "../../types";
import { Card } from "../card/Card";

import flat1 from "./assets/flat1.jpeg";
import flat2 from "./assets/flat2.jpeg";
import flat3 from "./assets/flat3.jpeg";
import flat4 from "./assets/flat4.jpeg";
import flat5 from "./assets/flat5.jpeg";
import flat6 from "./assets/flat6.jpeg";
import flat7 from "./assets/flat7.jpeg";
import flat8 from "./assets/flat8.jpeg";

import "./cardsField.scss";

const data: FlatType[] = [
  {
    id: "1",
    image: flat1,
    price: 3000,
    isGoodPrice: true,
    description: "6 rooms",
    location: "Eaton Square, London",
    date: new Date(2021, 7, 3).toDateString(),
  },
  {
    id: "2",
    image: flat2,
    price: 2000,
    isGoodPrice: false,
    description: "4 bedrooms and terrace",
    location: "Chester Square, Belgravia London",
    date: new Date(2021, 6, 21).toDateString(),
  },
  {
    id: "3",
    image: flat3,
    price: 1000,
    isGoodPrice: true,
    description: "3 rooms",
    location: "Eaton Square, London",
    date: new Date(2021, 6, 10).toDateString(),
  },
  {
    id: "4",
    image: flat4,
    price: 4000,
    isGoodPrice: true,
    description: "6 rooms and yard",
    location: "Eaton Square, London",
    date: new Date(2021, 7, 29).toDateString(),
  },
  {
    id: "5",
    image: flat5,
    price: 2500,
    isGoodPrice: true,
    description: "6 flats",
    location: "Eaton Square, London",
    date: new Date(2021, 5, 1).toDateString(),
  },
  {
    id: "6",
    image: flat6,
    price: 3000,
    isGoodPrice: true,
    description: "6 flats and 3 bathrooms",
    location: "Eaton Square, London",
    date: new Date(2021, 8, 1).toDateString(),
  },
  {
    id: "7",
    image: flat7,
    price: 1000,
    isGoodPrice: true,
    description: "2 rooms",
    location: "Eaton Square, London",
    date: new Date(2021, 4, 3).toDateString(),
  },
  {
    id: "8",
    image: flat8,
    price: 1850,
    isGoodPrice: true,
    description: "3 rooms and 2 bathrooms",
    location: "Eaton Square, London",
    date: new Date(2021, 8, 2).toDateString(),
  },
];

export const CardsField: React.FC = () => {
  return (
    <div className="cardsField">
      {data.map((flat) => (
        <Card flat={flat} key={flat.id} />
      ))}

      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
