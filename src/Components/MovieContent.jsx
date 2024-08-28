import React from "react";
import "./MovieContent.css";
import Button from "./Button";

function MovieContent({ movie }) {
  return (
    <div className={`content ${movie.active ? "active" : undefined}`}>
      <img src={movie.titleImg} alt="title" className="movietitle" />

      <h3>{movie.title}</h3>
      <h4>
        <span>{movie.year}</span>
        <span>{movie.length}</span>
        <span>{movie.category}</span>
      </h4>

      <div className="button">
        <Button
          icon={<ion-icon name="videocam-outline"></ion-icon>}
          name="Watch Now"
          color="#000025"
          bgColor="#f5db0c"
        />
      </div>
    </div>
  );
}

export default MovieContent;
