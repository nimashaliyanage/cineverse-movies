import React, { useState } from "react";
import "./MovieTrailer.css";
import VideoModel from "./VideoModel";

function MovieTrailer({ movie }) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className={`trailer ${movie.active ? "active" : undefined}`}>
        <a href="#" className="playBtn" onClick={toggleModal}>
          <ion-icon name="play-circle-outline"></ion-icon>
        </a>
        <h6>Watch Trailer</h6>
      </div>
      {movie.active && (
        <VideoModel movie={movie} status={modal} toggleModal={toggleModal} />
      )}
    </>
  );
}

export default MovieTrailer;
