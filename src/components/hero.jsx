import backgroundImage from "../assets/Backgrounding.avif";
import "../components/hero.css";

function Hero({ username }) {
  return (
    <div className="Hero-wrapper">
      <div className="img-wrapper">
        <img src={backgroundImage} alt="Background" />
      </div>

      <div className="hero-text">
        {username && <h1 className="welcome-message">Welcome {username}</h1>}
        <p>Your Journey, Your Story</p>
        <p>Choose Your Favourite Destination</p>
      </div>
    </div>
  );
}

export default Hero;
