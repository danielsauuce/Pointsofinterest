import { MdRecommend } from "react-icons/md";
import "../components/addpoi.css";
import { useState } from "react";


function AddPoi() {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [country, setCountry] = useState("");
    const [region, setRegion] = useState("");
    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("");
    const [description, setDescription] = useState("");
    const [recommendations, setRecommendation] = useState("");


    async function handleNewpoiUpdate(e) {
        e.preventDefault();
    
        try {
          const response = await fetch(
            `http://localhost:3000/poi/newpoi`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ name, type, country, region, lat, lon, description,recommendations }),
            }
          );

    
          const status = await response.json();
    
          if (response.status != 200) {
            throw new Error(status.error);
          } else {
            console.log("Point of interest Added");
          }
        } catch (error) {
          console.error("Error:", error.message);
        }
      }
    



    return(
        <div className="form-container">
            <div className="form-wrapper">
                <form onSubmit={handleNewpoiUpdate}>
                    <h1>ADD A NEW POINT OF INTEREST</h1>

                    <div className="form-input">
                        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                    </div>

                    <div className="form-input">
                        <input type="text" placeholder="Type" onChange={(e) => setType(e.target.value)}/>
                    </div>

                    <div className="form-input">
                        <input type="text" placeholder="Country" onChange={(e) => setCountry(e.target.value)}/>
                    </div>

                    <div className="form-input">
                        <input type="text" placeholder="Region" onChange={(e) => setRegion(e.target.value)}/>
                    </div>

                    <div className="form-input">
                        <input type="number" placeholder="lon" onChange={(e) => setLon(e.target.value)}/>
                    </div>

                    <div className="form-input">
                        <input type="number" placeholder="lat" onChange={(e) => setLat(e.target.value)}/>
                    </div>

                    <div className="form-input">
                        <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)}/>
                    </div>

                    <div className="form-input">
                        <input type="number" placeholder="Recommendation" onChange={(e) => setRecommendation(e.target.value)}/>
                    </div>

                    <button typeof="submit">Submit</button>

                </form>
            </div>
            

            <div className="img-poi" style={{ backgroundColor: "red" }}>
                <img />
            </div>
            

        </div>
    );
}
export default AddPoi;