import React from "react";
import "./VideoModel.css";

function VideoModel({ movie, toggleModal, status }) {
  return (
    <div className={`movieModal ${status ? "active" : undefined}`}>
      <a href="#" className="modalClose" onClick={toggleModal}>
        <ion-icon name="close-outline"></ion-icon>
      </a>
      <iframe
        width="1280"
        height="720"
        src={movie.video}
        title={`${movie.title}| Movie Trailer`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoModel;
