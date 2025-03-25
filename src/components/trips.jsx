import TripData from "./tripdata";
import Trip1 from "../assets/trip 1.avif";
import Trip2 from "../assets/trip 2.avif";
import Trip3 from "../assets/trip 3.avif";
import "../components/trips.css";

function Trip() {
  return (
    <div className="trips">
      <h1>Recent Trips</h1>
      <p>Discover Unique Destinations on the Map</p>

      <div className="trip-card">
        <TripData
          image={Trip1}
          heading="Southampton"
          text="Southampton is a port city on the south coast of England, known for its rich maritime history and vibrant cultural scene. As the departure point of the Titanic, the city offers attractions like the SeaCity Museum, which tells the story of the ill-fated voyage. Southampton is also home to Tudor House and Garden, a historic museum showcasing over 800 years of local history. With its beautiful parks, bustling shopping centers, and lively waterfront, Southampton is a perfect blend of history and modern attractions."
        />

        <TripData
          image={Trip2}
          heading="London"
          text="London, the capital of the United Kingdom, is a global metropolis famous for its historic landmarks, diverse culture, and world-class entertainment. Visitors can explore iconic sites like Big Ben, the Tower of London, and Buckingham Palace, or take a ride on the London Eye for breathtaking city views. The city’s museums, including the British Museum and Tate Modern, house priceless artifacts and artworks. With its lively theatre district, stunning parks, and diverse culinary scene, London offers an unforgettable experience for every traveler."
        />

        <TripData
          image={Trip3}
          heading="Paris"
          text="Paris, the capital of France, is renowned for its elegance, romance, and artistic heritage. The city is home to iconic landmarks such as the Eiffel Tower, Notre-Dame Cathedral, and the Louvre Museum, which houses the famous Mona Lisa. Strolling along the Champs-Élysées or exploring the charming streets of Montmartre offers a taste of Parisian charm. Known as a culinary hub, Paris boasts world-class dining, from traditional French cafés to Michelin-starred restaurants. Whether it's fashion, art, or history, Paris captivates visitors with its timeless allure."
        />


      </div>
    </div>
  );
}

export default Trip;
