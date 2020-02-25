import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const JokeCard = props => {
  const joke = props.joke;
  return (
    <div className="joke-card">
      <div className="joke-card-content">
        <div className="joke-title">
          <h3>{joke.title}</h3>
        </div>
        <p>{joke.text} </p>
      </div>
      <Link
        to={`/jokes/${joke.title
          .split(" ")
          .join("-")
          .toLowerCase()}`}
        className="stats-link"
      >
        See stats
      </Link>
    </div>
  );
};

export default JokeCard;
