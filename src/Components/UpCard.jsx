import React from "react";
import "./UpCard.css";

function UpCard({ slide }) {
  return (
    <div className="upcard">
      <img src={slide.previewImg} alt="image" className="img-fluid" />
      <a href="#">
        Add to List <ion-icon name="list-outline"></ion-icon>
      </a>
    </div>
  );
}

export default UpCard;
