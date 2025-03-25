import { Link } from "react-router-dom";
import { BiLogoAirbnb } from "react-icons/bi";
import { IoHomeSharp } from "react-icons/io5";
import { TiPointOfInterest } from "react-icons/ti";
import { RiSearchFill } from "react-icons/ri";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import "../components/navbar.css";



function Navbar() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar-container">
      <Link to="/" className="logo">
        <h1 className="nav-logo">
          <BiLogoAirbnb className="icon" /> Point of Interest
        </h1>
      </Link>

      {/* Menu Toggle Button */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes className="fa-times" /> : <FaBars className="fa-bar" />}
      </div>

      {/* Navbar Links */}
      <ul className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/" className="home-tag">
            <IoHomeSharp className="icon" /> Home
          </Link>
        </li>
        <li>
          <Link to="/addpoi" className="about-tag">
            <TiPointOfInterest className="icon" /> Add POIs
          </Link>
        </li>
        <li>
          <Link to="/poisearch" className="contact-tag">
            <RiSearchFill className="icon" /> Search POIs
          </Link>
        </li>
        <li>
          <Link to="/about" className="contact-tag">
            <RiSearchFill className="icon" /> About
          </Link>
        </li>

        <Link to="/login">
          <button className="login-button">Login</button>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
