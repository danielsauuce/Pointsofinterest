import React,{useState} from "react";


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
      <div style={{ paddingTop: "40px", height: "80%" }}>
        {results.length > 0 ? (
          <ul
            style={{
              backgroundColor: "white",
              height: "100%",
              overflowY: "scroll",
              textDecoration: "none",
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
                }}
              >
                <h3>{data.name}</h3>

                <p>Type: {data.type}</p>
                <p>Country: {data.country}</p>
                <p>lon: {data.lon}</p>
                <p>lat: {data.lat}</p>
                <p>Description: {data.description}</p>
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
            No results Found.
          </p>
        )}
      </div>
    </div>
  );
}

export default RegionsSearchForm;
