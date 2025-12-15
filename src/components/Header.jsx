import React from "react";
import "../index.css";
import { BsMastodon } from "react-icons/bs";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <BsMastodon className="logo" />
      </div>

      <nav className="nav">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">Create Todo</a>
        <a href="#about" className="nav-link">Logout</a>
      </nav>
    </header>
  );
};

export default Header;
