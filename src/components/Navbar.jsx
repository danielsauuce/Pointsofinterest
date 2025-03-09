function Navbar() {
  return (
    <nav className="navbar-container">

      <h1 className="nav-logo">Point of Interest</h1>

      <ul className="wrap-nav">
        <li><a href="/" className="home-tag">Home</a></li>
        <li><a href="/about" className="about-tag">About</a></li>
        <li><a href="/contact" className="contact-tag">Contact</a></li>
        <button className="login-button">Login</button>
      </ul>
      
    </nav>
  );
}

export default Navbar;
