import React from "react";
import "./index.css";

const Header = props => {
  return (
    <header>
      <div className="title">
        <h1 className="first-main-title">The Joke Bible</h1>
        <h2 className="second-main-title">Daily Laughs for you and yours</h2>
      </div>
      <form className="search-form">
        <input placeholder="How can we make you laugh today?" />
      </form>
    </header>
  );
};

export default Header;
