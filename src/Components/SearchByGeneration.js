import React from "react";

import "./SearchByGeneration.css";
function SearchByGeneration(props) {
  const changeHandler = (e) => {
    props.generationhandler(e.target.value);
  };
  return (
    <div className="filter">
      <h2>Filters</h2>
      <select onChange={changeHandler}>
        <option value="1">generation 1</option>
        <option value="2">generation 2</option>
        <option value="3">generation 3</option>
        <option value="4">generation 4</option>
        <option value="5">generation 5</option>
      </select>
    </div>
  );
}

export default SearchByGeneration;
