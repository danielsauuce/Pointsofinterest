import "../components/addpoi.css";
import { useState } from "react";
import toast from "react-hot-toast";
import Map from "../components/map";

function AddPoi() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [addedPois,setAddedPois] = useState([]);
  const [description, setDescription] = useState("");
  const [recommendations, setRecommendation] = useState("");

  async function handleNewpoiUpdate(e) {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/poi/newpoi`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          type,
          country,
          region,
          lat,
          lon,
          description,
          recommendations,
        }),
      });

      const result = await response.json();

      if (response.status !== 200) {

        toast.error("You're not logged in!");
        
      } else {
        setAddedPois([
          {
            id:result.id,
            name,
            type,
            country,
            region,
            lat,
            lon,
            description,
            recommendations,
          }
        ]);
        
        toast.success("Point of Interest added successfully!");
      }
    } catch (error) {
      console.error("Error", error.message);
      toast.error("Network error");
    }
  }

  async function handleReview(id,review) {


    try {
      const response = await fetch (`http://localhost:3000/poi/${id}/review`, {
        method: "POST",
        credentials: "include",
        header: {
          "Content-Type": "application/json",
        },
        body:{
          review
        }
      })

      const status = response.json();
      if (status!== 200) {
        return toast.error("You're not logged in")
      } else {
        toast.success("Review Submitted successfully")
      }
    } catch (error) {
      console.error(error.message)
    }
    
  }

  function getMapLatLng(lat, lng) {
    setLat(lat);
    setLon(lng);
  }

  return (
    <div className="search-container">
      <div className="form-wrapper">
        <form onSubmit={handleNewpoiUpdate}>
          <h1>ADD POINT OF INTEREST</h1>

          <div className="form-input">
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-input">
            <input
              type="text"
              placeholder="Type"
              onChange={(e) => setType(e.target.value)}
              required
            />
          </div>

          <div className="form-input">
            <input
              type="text"
              placeholder="Country"
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </div>

          <div className="form-input">
            <input
              type="text"
              placeholder="Region"
              onChange={(e) => setRegion(e.target.value)}
              required
            />
          </div>

          <div className="form-input">
            <input
              type="text"
              value={lon}
              placeholder="Longitude"
              onChange={(e) => setLon(e.target.value)}
              step="any"
              required
            />
          </div>

          <div className="form-input">
            <input
              type="text"
              placeholder="Latitude"
              value={lat}
              onChange={(e) => setLat(e.target.value)}
              step="any"
              required
            />
          </div>

          <div className="form-input">
            <input
              type="text"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="form-input">
            <input
              type="text"
              placeholder="Recommendations"
              onChange={(e) => setRecommendation(e.target.value)}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>

      <Map displayResults={addedPois} sendMapLatLng={getMapLatLng} addReview={handleReview}/>
    </div>
  );
}

export default AddPoi;
