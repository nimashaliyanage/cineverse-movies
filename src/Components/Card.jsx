import React from "react";
import "./Card.css";

function Card({ movie }) {
  return (
    <div className="col-lg-2 col-md-4 col-sm-6">
      <div className="movie-card">
        <img src={movie.previewImg} alt="previewImg" className="img-fluid" />
        <p>{movie.title}</p>
        <div className="content">
          <div className="card-icon">
            <ion-icon name="add-circle-outline"></ion-icon>
            <ion-icon name="play-circle-outline"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
