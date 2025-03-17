import backgroundImage from "../assets/Backgroundimg.avif";


function Hero() {
    return (
        <div className="Hero-wrapper">
            <div className="img-wrapper"> <img src={backgroundImage} alt="Background" /> </div>

            <div className="hero-text">
                <h1>Your Journey, Your Story</h1>
                <p>Choose Your Favourite Destination</p>
            </div>
        </div>
    );
}

export default Hero;