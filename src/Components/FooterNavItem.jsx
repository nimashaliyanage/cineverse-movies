import React from "react";
import "./FooterNavItem.css";

function FooterNavItem({ name }) {
  return (
    <li>
      <ion-icon name="ellipse-outline"></ion-icon>
      <a href="#">{name}</a>
    </li>
  );
}

export default FooterNavItem;
