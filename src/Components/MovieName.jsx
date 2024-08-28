import React from "react";
import "./MovieName.css";

function MovieName({ movie }) {
  return (
    <div className={`para ${movie.active ? "active" : undefined}`}>
      <p>{movie.description}</p>
    </div>
  );
}

export default MovieName;
