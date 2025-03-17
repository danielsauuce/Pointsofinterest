import {Link} from "react-router-dom";
import { BiLogoAirbnb } from "react-icons/bi";

function Navbar() {
  return (
    <nav className="navbar-container">

      <Link to="/" className="logo"><h1 className="nav-logo"><BiLogoAirbnb/>Point of Interest</h1></Link>

      <ul className="wrap-nav">
        <li><Link to="/" className="home-tag">Home</Link></li>
        <li><Link to="/addpoi" className="about-tag">Add POI</Link></li>
        <li><Link to="/poisearch" className="contact-tag">Search POI</Link></li>

        <Link to="/login"> <button className="login-button">Login</button> </Link>
      </ul>

      
      
    </nav>
  );
}

export default Navbar;