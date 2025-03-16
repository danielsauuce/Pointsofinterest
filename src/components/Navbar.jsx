import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar-container">

      <h1 className="nav-logo">Point of Interest</h1>

      <ul className="wrap-nav">
        <li><Link to="/" className="home-tag">Home</Link></li>
        <li><Link to="/addpoi" className="about-tag">Add POI</Link></li>
        <li><Link to="/poisearch" className="contact-tag">Search POI</Link></li>
        <button className="login-button">Login</button>
      </ul>
      
    </nav>
  );
}

export default Navbar;
