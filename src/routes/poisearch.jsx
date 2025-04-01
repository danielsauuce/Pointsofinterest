import { useState } from "react";
import "../components/search.css";
import "../components/login.css";
import Map from "../components/map";
import RegionsSearchForm from "../components/RegionSearchForm";

function PoiSearch() {
  const [results, setResults] = useState([]);
  const [region, setRegion] = useState("");

  async function Handlesearch(e) {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/poi/${region}`);
      const result = await response.json();

      setResults(result);
      console.log(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  async function handleRecommend(e, id) {
    e.preventDefault();
  
    try {
      const response = await fetch(
        `http://localhost:3000/poi/recommend/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      const status = await response.json();
  
      if (response.status !== 200) {
        throw new Error(status.error);
      } else {
        const updatedResults = results.map((item) => {
          if (item.id === id) {
            return { ...item, recommendations: item.recommendations + 1 };
          }
          return item;
        });
  
        setResults(updatedResults);
  
        console.log("Recommendation Updated");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  
  return (
    <div className="search-container">
      <RegionsSearchForm results={results} region={region} handleRecommend={handleRecommend} Handlesearch={Handlesearch} updateRegion={(r)=>setRegion(r)} />
      <Map displayResults={results}/>
    </div>
  );
}

export default PoiSearch;
