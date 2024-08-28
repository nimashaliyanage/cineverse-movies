import React, { useState } from "react";
import "./Header.css";
import NavItems from "../Components/NavItems";
import logo from "../Asserts/logo512.png";
import navListData from "../Data/navListData";
import SearchBar from "../Components/SearchBar";
import Button from "../Components/Button";

function Header({ scroll }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={`${scroll > 100 ? "scrolled" : undefined}`}>
      <a href="/" className="logo">
        <img src={logo} alt="logo" />
      </a>
      <div className="menu" onClick={toggleMenu}>
        <ion-icon name="menu-outline"></ion-icon>
      </div>

      <ul className={`nav ${showMenu ? "show" : ""}`}>
        {navListData.map((nav) => (
          <NavItems key={nav._id} nav={nav} />
        ))}
      </ul>
      <Button name="Log In" />
      <SearchBar />
    </header>
  );
}

export default Header;
