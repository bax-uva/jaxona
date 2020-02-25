import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const JokeView = props => {
  const jokes = props.jokes;
  const jokeTitle = props.match.params.jokeTitle;
  const chosenJoke = jokes.find(
    a =>
      a.title
        .split(" ")
        .join("-")
        .toLowerCase() === jokeTitle
  );

  const topJokes = jokes
    .sort((obj1, obj2) => obj2.likes - obj1.likes)
    .slice(0, 5);
  const likes = chosenJoke.likes;
  let popularity = "";
  switch (true) {
    case likes <= 50:
      popularity = "popular";
      break;
    case likes <= 100:
      popularity = "trending";
      break;
    case likes >= 101:
      popularity = "epic";
      break;
    default:
      popularity = " ";
  }
  return (
    <section>
      <div className="joke-view-wrapper">
        <Link to="/">
          <button className="back-to-home">Back to Home</button>
        </Link>
        <div className="joke-view-main">
          <div className="joke-detail">
            <div className="joke-card">
              <div className="joke-card-content">
                <div className="joke-header">
                  <div
                    className={`category-tag ${chosenJoke.category
                      .split(" ")
                      .join("-")}`}
                  >
                    <span>&#8226;</span>
                    {chosenJoke.category}
                  </div>

                  <div className={`tag ${popularity}-tag`}>
                    <span>&#8226;</span> {popularity}
                  </div>
                </div>
                <h3>{chosenJoke.title}</h3>
                <p>{chosenJoke.text}</p>
              </div>
            </div>
            <div className="joke-footer">
              <div className="stats">
                <div className="stat positive">
                  <button className="stat-button positive-stat">+</button>
                  {chosenJoke.likes}
                </div>
                <div className="stat negative">
                  <button className="stat-button negative-stat">-</button>
                  {chosenJoke.dislikes}
                </div>
              </div>
            </div>
          </div>
          <aside className="top-5-feed">
            <div className="top-feed-wrapper">
              <h3>The top 5 jokes this week</h3>
              {topJokes.map(joke => (
                <p key={joke.title}>{joke.title}</p>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default JokeView;
