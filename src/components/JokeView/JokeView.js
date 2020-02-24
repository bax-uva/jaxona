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
          <button className="back-to-home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="18"
              viewBox="0 0 10 18"
            >
              <path
                fill="#CFB995"
                fillRule="nonzero"
                d="M3 8.953l6.585-6.768a1.3 1.3 0 0 0 0-1.807 1.225 1.225 0 0 0-1.761 0L.363 8.048A1.303 1.303 0 0 0 .326 9.81l7.493 7.723a1.226 1.226 0 0 0 1.761 0 1.3 1.3 0 0 0 0-1.807L3 8.953z"
              />
            </svg>
          </button>
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
                  <button className="stat-button positive-stat">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="22"
                      viewBox="0 0 24 22"
                    >
                      <g fill="#FFF" fillRule="nonzero">
                        <path d="M3.281 11.061a.469.469 0 1 0 0 .938.469.469 0 0 0 0-.938z" />
                        <path d="M24 12.702c0-.662-.307-1.253-.785-1.64.61-.493.876-1.255.756-1.992-.163-1.003-1.095-1.759-2.168-1.759h-4.465l.139-.417c.794-2.383.056-4.929-1.692-6.418-.977-.843-2.643-.562-3.155.832a.469.469 0 0 0-.007.302c.39 1.239.395 2.072.019 2.875-.39.833-1.228 1.707-2.804 2.924-.378.292-.708.47-1.028.643-.503.272-.982.53-1.476 1.134H5.625v-.469a.469.469 0 0 0-.469-.468H.47A.469.469 0 0 0 0 8.717v12.188c0 .259.21.469.469.469h4.687c.26 0 .469-.21.469-.47V19.5h2.63a7.424 7.424 0 0 0 4.946 1.875h5.877a2.108 2.108 0 0 0 1.753-3.282h.122a2.108 2.108 0 0 0 1.66-3.408A2.11 2.11 0 0 0 24 12.702zM4.687 20.436H.938V9.186h3.75v11.25zm17.204-6.562h-4.5a.469.469 0 0 0 0 .937h3.562a1.171 1.171 0 1 1 0 2.344h-3.562a.469.469 0 0 0 0 .937h1.687a1.171 1.171 0 1 1 0 2.344h-5.877a6.49 6.49 0 0 1-4.445-1.749.469.469 0 0 0-.32-.126H5.625v-8.437h1.939c.149 0 .289-.071.377-.191.423-.574.797-.776 1.315-1.056a7.852 7.852 0 0 0 1.156-.726c3.209-2.479 3.943-3.998 3.157-6.653.31-.597 1.086-.758 1.637-.283 1.494 1.306 2.036 3.419 1.381 5.383l-.237.713h-.6a.469.469 0 0 0 0 .938h6.053c.619 0 1.153.417 1.243.971a1.172 1.172 0 0 1-1.155 1.373h-4.5a.469.469 0 0 0 0 .937h4.5a1.171 1.171 0 1 1 0 2.344z" />
                        <path d="M3.281 12.936a.469.469 0 0 0-.469.469v4.687a.469.469 0 1 0 .938 0v-4.687a.469.469 0 0 0-.469-.469z" />
                      </g>
                    </svg>
                  </button>
                  {chosenJoke.likes}
                </div>
                <div className="stat negative">
                  <button className="stat-button negative-stat">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="22"
                      viewBox="0 0 24 22"
                    >
                      <g fill="#FFF" fillRule="nonzero">
                        <path d="M3.281 11.061a.469.469 0 1 0 0 .938.469.469 0 0 0 0-.938z" />
                        <path d="M24 12.702c0-.662-.307-1.253-.785-1.64.61-.493.876-1.255.756-1.992-.163-1.003-1.095-1.759-2.168-1.759h-4.465l.139-.417c.794-2.383.056-4.929-1.692-6.418-.977-.843-2.643-.562-3.155.832a.469.469 0 0 0-.007.302c.39 1.239.395 2.072.019 2.875-.39.833-1.228 1.707-2.804 2.924-.378.292-.708.47-1.028.643-.503.272-.982.53-1.476 1.134H5.625v-.469a.469.469 0 0 0-.469-.468H.47A.469.469 0 0 0 0 8.717v12.188c0 .259.21.469.469.469h4.687c.26 0 .469-.21.469-.47V19.5h2.63a7.424 7.424 0 0 0 4.946 1.875h5.877a2.108 2.108 0 0 0 1.753-3.282h.122a2.108 2.108 0 0 0 1.66-3.408A2.11 2.11 0 0 0 24 12.702zM4.687 20.436H.938V9.186h3.75v11.25zm17.204-6.562h-4.5a.469.469 0 0 0 0 .937h3.562a1.171 1.171 0 1 1 0 2.344h-3.562a.469.469 0 0 0 0 .937h1.687a1.171 1.171 0 1 1 0 2.344h-5.877a6.49 6.49 0 0 1-4.445-1.749.469.469 0 0 0-.32-.126H5.625v-8.437h1.939c.149 0 .289-.071.377-.191.423-.574.797-.776 1.315-1.056a7.852 7.852 0 0 0 1.156-.726c3.209-2.479 3.943-3.998 3.157-6.653.31-.597 1.086-.758 1.637-.283 1.494 1.306 2.036 3.419 1.381 5.383l-.237.713h-.6a.469.469 0 0 0 0 .938h6.053c.619 0 1.153.417 1.243.971a1.172 1.172 0 0 1-1.155 1.373h-4.5a.469.469 0 0 0 0 .937h4.5a1.171 1.171 0 1 1 0 2.344z" />
                        <path d="M3.281 12.936a.469.469 0 0 0-.469.469v4.687a.469.469 0 1 0 .938 0v-4.687a.469.469 0 0 0-.469-.469z" />
                      </g>
                    </svg>
                  </button>
                  {chosenJoke.dislikes}
                </div>
              </div>
              <div className="joke-nav">
                <button className="arrow-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="15"
                    viewBox="0 0 9 15"
                  >
                    <path
                      fill="#CFB995"
                      fillRule="nonzero"
                      d="M2.571 7.461l5.645-5.64a1.061 1.061 0 0 0 0-1.506 1.07 1.07 0 0 0-1.51 0L.311 6.706a1.064 1.064 0 0 0-.031 1.47l6.422 6.435c.208.21.484.311.755.311a1.061 1.061 0 0 0 .755-1.816L2.572 7.46z"
                    />
                  </svg>
                  prev. joke
                </button>
                <button className="arrow-link">
                  next joke
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="15"
                    viewBox="0 0 9 15"
                  >
                    <path
                      fill="#CFB995"
                      fillRule="nonzero"
                      d="M6 7.461L.355 1.821a1.061 1.061 0 0 1 0-1.506 1.07 1.07 0 0 1 1.51 0l6.396 6.391c.404.404.413 1.053.03 1.47L1.87 14.611c-.209.21-.484.311-.755.311s-.547-.102-.755-.31a1.061 1.061 0 0 1 0-1.506L6 7.46z"
                    />
                  </svg>
                </button>
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
