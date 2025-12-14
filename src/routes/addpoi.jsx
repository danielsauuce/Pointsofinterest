import "../components/addpoi.css";
import { useState } from "react";
import toast from "react-hot-toast";
import Map from "../components/map";

const formFields = [
  { name: "name", placeholder: "Name", type: "text" },
  { name: "type", placeholder: "Type", type: "text" },
  { name: "country", placeholder: "Country", type: "text" },
  { name: "region", placeholder: "Region", type: "text" },
  { name: "lon", placeholder: "Longitude", type: "text" },
  { name: "lat", placeholder: "Latitude", type: "text" },
  { name: "description", placeholder: "Description", type: "text" },
  { name: "recommendations", placeholder: "Recommendations", type: "number" },
];

function AddPoi() {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    country: "",
    region: "",
    lon: "",
    lat: "",
    description: "",
    recommendations: "",
  });

  const [addedPois, setAddedPois] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3005/poi/newpoi", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.error || "You're not logged in!");
        return;
      }

      setAddedPois((prev) => [...prev, { id: result.id, ...formData }]);

      toast.success("Point of Interest added successfully!");

      //reset form
      setFormData({
        name: "",
        type: "",
        country: "",
        region: "",
        lon: "",
        lat: "",
        description: "",
        recommendations: "",
      });
    } catch (error) {
      console.error(error.message);
      toast.error("Network error");
    }
  }

  function getMapLatLng(lat, lng) {
    setFormData((prev) => ({
      ...prev,
      lat,
      lon: lng,
    }));
  }

  async function handleReview(id, review) {
    try {
      const response = await fetch(`http://localhost:3005/poi/${id}/review`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ review }),
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.error || "You're not logged in");
        return;
      }

      toast.success("Review submitted successfully");
    } catch (error) {
      toast.error("Network error");
    }
  }

  return (
    <div className="search-container">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <h1>ADD POINT OF INTEREST</h1>

          {formFields.map(({ name, placeholder, type }) => (
            <div className="form-input" key={name}>
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={formData[name]}
                onChange={handleChange}
                required
              />
            </div>
          ))}

          <button type="submit">Submit</button>
        </form>
      </div>

      <Map
        displayResults={addedPois}
        sendMapLatLng={getMapLatLng}
        addReview={handleReview}
      />
    </div>
  );
}

export default AddPoi;
