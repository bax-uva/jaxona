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
        </div>
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
