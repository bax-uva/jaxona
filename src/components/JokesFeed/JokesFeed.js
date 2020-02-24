import React from "react";
import "./index.css";
import CategoryButton from "../CategoryButton/CategoryButton.js";
import JokeCard from "../JokeCard/JokeCard.js";

const JokesFeed = props => {
  const jokes = props.jokes;
  const [chosenCategory, setChosenCategory] = React.useState("");
  const [filteredJokes, setfilteredJokes] = React.useState(jokes);
  const categories = jokes.map(a => a.category);
  const uniqueCategories = Array.from(new Set(categories));
  const filterJokes = category => {
    setChosenCategory(category);
    const filteredByCategory = jokes.filter(joke => joke.category === category);
    setfilteredJokes(filteredByCategory);
  };
  return (
    <section>
      <div className="feed-wrapper">
        <div className="categories-wrapper">
          {uniqueCategories.map(category => (
            <CategoryButton
              key={category}
              category={category}
              filterJokes={filterJokes}
            />
          ))}
          <button className="category view-all">
            View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="16"
              viewBox="0 0 11 16"
            >
              <path
                fill="#CFB995"
                fillRule="nonzero"
                d="M10.79 10.204a.765.765 0 0 0-1.055-.006l-3.489 3.373V.717A.731.731 0 0 0 5.502 0a.731.731 0 0 0-.745.717V13.57l-3.489-3.379a.77.77 0 0 0-1.054.006.704.704 0 0 0 .006 1.017l4.755 4.58a.839.839 0 0 0 .235.15.759.759 0 0 0 .808-.15l4.754-4.58a.693.693 0 0 0 .017-1.011z"
              />
            </svg>
          </button>
        </div>
        <hr></hr>
        {chosenCategory ? (
          <div
            className={`chosen-category ${chosenCategory.split(" ").join("-")}`}
          >
            <p>{chosenCategory}</p>
          </div>
        ) : null}
        <div className="jokes-wrapper">
          {filteredJokes.map(joke => (
            <JokeCard key={joke.title} joke={joke} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JokesFeed;
