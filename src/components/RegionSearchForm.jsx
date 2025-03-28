import React, { useState } from "react";

function RegionsSearchForm() {
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

      if (response.status != 200) {
        throw new Error(status.error);
      } else {
        console.log("Recommendation Updated");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  }

  return (
    <div className="region-wrapper">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1 style={{ paddingBottom: "10px" }}>Search for Region</h1>

        <div className="form-input">
          <input
            type="text"
            placeholder="Enter Region..."
            value={region}
            style={{ paddingBottom: "10px" }}
            onChange={(e) => setRegion(e.target.value)}
          />
        </div>
        <button onClick={Handlesearch}>Search</button>
      </div>

      <div style={{ paddingTop: "10px", height: "80%" }}>
        {results.length > 0 ? (
          <ul
            style={{
              height: "100%",
              overflowY: "scroll",
              listStyle: "none",
              borderRadius: "5px",
              padding: "2rem",
              backgroundColor: "#F8EDE3",
            }}
          >
            {results.map((data, index) => (
              <li
                key={index}
                className="region-results"
                style={{
                  padding: "20px",
                  margin: "10px",
                  borderRadius: "20px",
                  boxShadow: "0 0 5px grey",
                  backgroundColor: "white",
                }}
              >
                <h3>{data.name}</h3>

                <p>Type: {data.type}</p>
                <p>Country: {data.country}</p>
                <p>lon: {data.lon}</p>
                <p>lat: {data.lat}</p>
                <p>Description: {data.description}</p>
                <br />
                <button onClick={(e) => handleRecommend(e, data.id)}>
                  Recommend
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
              marginTop: "30%",
            }}
          >
            No results found.
          </p>
        )}
      </div>
    </div>
  );
}

export default RegionsSearchForm;
