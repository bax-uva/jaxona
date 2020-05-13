import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header.js";
import JokesFeed from "./components/JokesFeed/JokesFeed.js";
import JokeView from "./components/JokeView/JokeView.js";

function App() {
  const data = require("./data/jokes.json");
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route
            render={props => <JokeView {...props} jokes={data.jokes} />}
            path="/jokes/:jokeTitle"
          />
          <Route
            path="/"
            render={props => <JokesFeed {...props} jokes={data.jokes} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
