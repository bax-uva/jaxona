import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const JokeCard = props => {
  const joke = props.joke;
  return (
    <div className="joke-card">
      <div className="joke-card-content">
        <div className="joke-title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="14"
            viewBox="0 0 8 14"
          >
            <path
              fill="#FFDF5B"
              fillRule="nonzero"
              d="M7.756 6h-3.38L6.011.161C6.04.021 5.87-.06 5.787.055L.048 7.581C-.07 7.756.042 8 .245 8h3.38L1.99 13.839c-.029.14.143.222.224.106l5.74-7.523C8.067 6.244 7.958 6 7.755 6z"
            />
          </svg>{" "}
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="14"
          viewBox="0 0 21 14"
        >
          <path
            fill="#D0BA93"
            fillRule="nonzero"
            d="M13.392.268a.952.952 0 0 0-.007 1.342l4.435 4.44H.94A.945.945 0 0 0 0 6.998c0 .525.423.948.941.948h16.871l-4.434 4.44a.96.96 0 0 0 .007 1.341.945.945 0 0 0 1.335-.007l6.01-6.051c.08-.088.146-.183.197-.3a.95.95 0 0 0-.197-1.028L14.72.29a.93.93 0 0 0-1.328-.022z"
          />
        </svg>
      </Link>
    </div>
  );
};

export default JokeCard;
