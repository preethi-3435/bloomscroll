import React from "react";
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">BloomScroll</div>
      <nav>
        <ul className="menu">
          <li><Link to="animated-section" smooth={true} duration={500}>Explore</Link></li>
          <li><Link to="features" smooth={true} duration={500}>Features</Link></li>
          <li><Link to="text-container" smooth={true} duration={500}>Tools</Link></li>
          <li><Link to="contact-container" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
