import React from "react";
import { movies } from "../data";

function Movies(){

  //console.log(movies)
  return (
  <div>
    <h1>Movies Page</h1>
    {movies.map(movie => {
      return <div>
        <h2>Title: {movie.title}</h2>
        <p>Time: {movie.time}</p>
        Movies: <ul>{movie.genres.map(genre => <li>{genre}</li>)}</ul>
      </div>
  })}
  </div>)
}

export default Movies;
