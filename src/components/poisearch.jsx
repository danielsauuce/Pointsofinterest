import { useState } from "react";

function PoiSearch() {
    const [region,setRegion] = useState("")
    const [results,setResults] = useState([])

    async function Handlesearch(e) {
        e.preventDefault()

        try {
            const response = await fetch (`http://localhost:3000/poi/${region}`)
            const result =  await response.json();

            setResults(result);
            console.log(result)


        } catch(error) {

        }
        
    }
    

    return (
        <div className="POI-wrapper">
            <div>
                
            </div>
            <h1>Search Points of Interest</h1>

            <div className="input-poi">
                <input type="text" placeholder="Enter region" onChange={(e) => setRegion(e.target.value)} />
            </div>

            <button onClick={Handlesearch}>Search</button>

            <div>
            {results.map(data=>(
                data.name, data.type
            ))}
            </div>
            

        </div>
        

    )

}

export default PoiSearch;