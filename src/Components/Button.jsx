import React from "react";
import "./Button.css";

function WatchNow({ icon, name, color, bgColor }) {
  return (
    <a href="#" className="watchnow">
      {" "}
      {name} {icon}
    </a>
  );
}

export default WatchNow;
