import React from "react";

import "./Header.css";
import headerLogo from "../assets/images/pokemon-logo.svg";

function Header() {
  return (
    <header className="header">
      <a href="/">
        <img className="logo" src={headerLogo} alt=" " />
      </a>
    </header>
  );
}

export default Header;
