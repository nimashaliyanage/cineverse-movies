import React from "react";
import "./NavItems.css";

function NavItems({ nav }) {
  return (
    <li>
      <a href={nav.link}>{nav.name}</a>
    </li>
  );
}

export default NavItems;
