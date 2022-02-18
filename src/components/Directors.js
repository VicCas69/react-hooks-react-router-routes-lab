import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map( director => {
      return <div>
        <h2>Name: {director.name}</h2>
        Movies: <ul>{director.movies.map( dir => <li>{dir}</li>)}</ul>
      </div>
    })}</div>
  )
}

export default Directors;
