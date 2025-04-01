import React, { useRef, useEffect } from "react";
import L from "leaflet";

function Map({ displayResults }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    if (!mapInstanceRef.current) {
      const initialPos = [51.505, -0.09];
      mapInstanceRef.current = L.map(mapRef.current).setView(initialPos, 13);

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapInstanceRef.current);
    }
  }, []);

  useEffect(() => {
    
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];

    if (displayResults.length > 0) {
      const { lat, lon } = displayResults[0];
      mapInstanceRef.current.setView([lat, lon], 13);

      displayResults.forEach(({ name, description, lat, lon }) => {
        const marker = L.marker([lat, lon])
          .addTo(mapInstanceRef.current)
          .bindPopup(`${name} <br> ${description}`);
        markersRef.current.push(marker);
      });
    }
  }, [displayResults]);

  return <div className="map" ref={mapRef} style={{ height: "100%", width: "100%" }}></div>;
}

export default Map;
