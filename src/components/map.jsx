import React, { useRef, useEffect } from "react";
import L from "leaflet";

function Map() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (mapInstanceRef.current) return; 

    mapInstanceRef.current = L.map(mapRef.current).setView([51.505, -0.09], 13);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapInstanceRef.current);

    L.marker([51.5, -0.09])
      .addTo(mapInstanceRef.current)
      .bindPopup("A pretty CSS popup.<br> Easily customizable.")
      .openPopup();
  }, []);

  return <div className="map" ref={mapRef} style={{ height: "100%", width: "100%" }}></div>;
}

export default Map;
