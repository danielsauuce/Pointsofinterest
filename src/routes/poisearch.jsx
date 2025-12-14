import { useState } from "react";
import toast from "react-hot-toast";
import "../components/login.css";
import Map from "../components/map";
import RegionsSearchForm from "../components/RegionSearchForm";
import "../components/search.css";

function PoiSearch() {
  const [results, setResults] = useState([]);
  const [region, setRegion] = useState("");
  const [Searched, setSearched] = useState(false);

  async function Handlesearch() {
    setSearched(true);

    try {
      const response = await fetch(`http://localhost:3005/poi/${region}`);
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
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const status = await response.json();

      if (response.status !== 200) {
        toast.error("You're not logged in!");
      } else {
        const updatedResults = results.map((item) => {
          if (item.id === id) {
            return { ...item, recommendations: item.recommendations + 1 };
          }
          return item;
        });

        setResults(updatedResults);

        toast.success("Recommendation Updated");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
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

      if (response.status !== 200) {
        toast.error("You're not logged in");
      } else {
        toast.success("Review Submitted successfully");
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className="search-container">
      <RegionsSearchForm
        results={results}
        region={region}
        handleRecommend={handleRecommend}
        Handlesearch={Handlesearch}
        updateRegion={(r) => setRegion(r)}
        handleReview={handleReview}
        Searched={Searched}
      />
      <Map displayResults={results} addReview={handleReview} />
    </div>
  );
}

export default PoiSearch;
