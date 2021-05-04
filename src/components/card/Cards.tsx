import React, { useState, useEffect } from "react";
import "./card.scss";
import { Link } from "react-router-dom";
import CardItem from "./CardItem";

interface ICards {
}

const Cards: React.FC<ICards> = () => {
  return (
    <div className="cards">
      <h1> Some places you might want to go! </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="assets/images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
            />
            <CardItem
              src="assets/images/img-2.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="assets/images/img-11.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
            />
            <CardItem
              src="assets/images/img-10.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
            />
            <CardItem
              src="assets/images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
