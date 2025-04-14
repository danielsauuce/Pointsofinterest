import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import "../components/navbar.css";
import { useState } from "react";

function Navbar() {
  const [user,setUser] = useState("");
  



  return (
    <nav className="navbar-container">
      <Link to="/" className="logo">
        <h1 className="nav-logo"> Point of Interest</h1>
      </Link>

      <ul className="nav-menu">
        <li>
          <Link to="/" className="home-tag">
            <IoHomeSharp className="icon" /> Home
          </Link>
        </li>
        <li>
          <Link to="/addpoi" className="about-tag">
            Add POIs
          </Link>
        </li>
        <li>
          <Link to="/poisearch" className="contact-tag">
            Search POIs
          </Link>
        </li>

        <li>
          <Link to="/login">
            <button className="login-button">Login</button>
          </Link>
        </li>

        <li>
          <Link to="/login">
            <button className="login-button">Login</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
