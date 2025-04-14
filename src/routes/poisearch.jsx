import { useState } from "react";
import "../components/search.css";
import "../components/login.css";
import Map from "../components/map";
import RegionsSearchForm from "../components/RegionSearchForm";
import toast from 'react-hot-toast';

function PoiSearch() {
  const [results, setResults] = useState([]);
  const [region, setRegion] = useState("");
  // const [isLoggedIn, setIsLoggedIn] = useState(false);


  // async function checkIfLoggedIn() {
  //   try {
  //     const response = await fetch(`http://localhost:3000/users/login`, {
  //       credentials: 'include',
  //     });
  //     const result = await response.json();

  //     if (result.username) {
  //       setIsLoggedIn(true);
  //       toast.success("Logged in");
  //     } else {
  //       setIsLoggedIn(false);
  //       toast.error("Not logged in");
  //     }
  //   } catch (error) {
  //     console.error("Error checking login status:", error);
  //   }
  // }

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
        toast.error("You're not logged in!")
      } else {
        const updatedResults = results.map((item) => {
          if (item.id === id) {
            return { ...item, recommendations: item.recommendations + 1 };
            
          }
          return item;
        });
  
        setResults(updatedResults);

        toast.success("Recommendation Updated")
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
    
  }
  
  return (
    <div className="search-container">
      <RegionsSearchForm results={results} region={region} handleRecommend={handleRecommend} Handlesearch={Handlesearch} updateRegion={(r)=>setRegion(r)} />
      <Map displayResults={results} />
    </div>
  );
}

export default PoiSearch;
