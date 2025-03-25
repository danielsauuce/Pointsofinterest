import { useState } from "react";
import "../components/search.css";
import "../components/login.css";
import Map from "../components/map";
import RegionsSearchForm from "../components/RegionSearchForm";

function PoiSearch() {
 
  return (
    <div className="search-container">
      <RegionsSearchForm/>
      <Map />
    </div>
  );
}

export default PoiSearch;
