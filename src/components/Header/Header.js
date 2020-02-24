import React from "react";
import "./index.css";

const Header = props => {
  return (
    <header>
      <div className="title">
        <h1 className="first-main-title">Ha He Hi</h1>
        <h2 className="second-main-title">Jokes Database</h2>
      </div>
      <form className="search-form">
        <input placeholder="How can we make you laugh today?" />
      </form>
    </header>
  );
};

export default Header;
