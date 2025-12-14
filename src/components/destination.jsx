import Island from '../assets/island.avif';
import Island2 from '../assets/island 2.avif';
import Coastal from '../assets/coastal.avif';
import Coastal2 from '../assets/coastal 2.avif';
import '../components/destination.css';

const destinations = [
  {
    title: 'A Volcano Within a Lake, Within an Island',
    description:
      'One of the most breathtaking sights in Luzon, Mt. Taal is a unique natural wonder—a volcano nestled inside a lake, which itself is within an island. If you’re up for an adventure, the hike to the crater takes only about 45 minutes and is suitable for beginners. Along the way, local guides will assist you, offering insights into the fascinating volcanic landscape, from rugged lava rocks to steaming vents. The trek can get hot and dusty, so it’s best to start early in the morning. After your hike, reward yourself with a bowl of bulalo, a local specialty, before heading back home.',
    images: [Island, Island2],
    reverse: false,
  },
  {
    title: 'A Coastal City of History and Charm',
    description:
      'Nestled on England’s southern coast, Southampton is a city rich in maritime history and modern charm. Best known as the departure point of the Titanic, the city boasts a beautiful waterfront, historic landmarks, and vibrant cultural attractions. A walk along the Medieval Walls offers stunning views and a glimpse into the past, while the SeaCity Museum provides fascinating insights into Southampton’s naval heritage. For a relaxing break, head to the New Forest National Park, just a short drive away, where scenic trails and wildlife await. Whether exploring history or enjoying the sea breeze at the marina, Southampton offers an unforgettable experience.',
    images: [Coastal, Coastal2],
    reverse: true,
  },
];

function Destination() {
  return (
    <section className="Destination">
      <div className="des-wrapper">
        <h1>Popular Destinations</h1>
        <p>Tour gives you the opportunity to see a lot, within a time frame.</p>
      </div>

      {destinations.map(({ title, description, images, reverse }, index) => (
        <div
          key={index}
          className={reverse ? 'first-des-reverse' : 'first-des'}
        >
          <div className="des-text">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>

          <div className="image">
            {images.map((img, i) => (
              <img key={i} src={img} alt={title} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Destination;
