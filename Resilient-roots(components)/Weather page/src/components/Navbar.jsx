import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Resilient Roots AI</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#result">Result</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
