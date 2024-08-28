import React from "react";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search">
      <input type="text" placeholder="Search..." />
      <ion-icon name="search-outline"></ion-icon>
    </div>
  );
}

export default SearchBar;
