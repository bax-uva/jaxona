import React from "react";
import "./index.css";

const CategoryButton = props => {
  return (
    <button
      className={`category ${props.category.split(" ").join("-")}`}
      onClick={e => props.filterJokes(props.category)}
    >
      {props.category}
    </button>
  );
};

export default CategoryButton;
