import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          <span className="church-name">
            CHRIST THE ROCK <br /> FOUNDATION MINISTRIES
          </span>
        </Link>
      </div>

      <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={handleMenuToggle}>
        <span />
        <span />
        <span />
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/mission" onClick={closeMenu}>Mission</Link></li>
        <li><Link to="/branches" onClick={closeMenu}>Branches</Link></li>
        <li><Link to="/titheofferings" onClick={closeMenu}>Tithe & Offerings</Link></li>
        <li><Link to="/sermons" onClick={closeMenu}>Sermons</Link></li>
        <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
        <li><Link to="/donations" onClick={closeMenu}>Donations</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
}
