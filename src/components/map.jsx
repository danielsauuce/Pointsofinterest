import React, { useRef, useEffect } from "react";
import L from "leaflet";

function Map({ displayResults = [], sendMapLatLng, addReview }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);

  // Initialize map
  useEffect(() => {
    if (!mapInstanceRef.current) {
      const initialPos = [51.505, -0.09];
      mapInstanceRef.current = L.map(mapRef.current).setView(initialPos, 13);

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapInstanceRef.current);

      // Click to set new lat/lon
      mapInstanceRef.current.on("click", (e) => {
        clearMarkers();
        sendMapLatLng?.(e.latlng.lat, e.latlng.lng);
      });
    }
  }, [sendMapLatLng]);

  // Clear all markers
  const clearMarkers = () => {
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];
  };

  // Render markers when displayResults change
  useEffect(() => {
    if (!mapInstanceRef.current) return;

    clearMarkers();

    if (displayResults.length === 0) return;

    const { lat, lon } = displayResults[0];
    mapInstanceRef.current.setView([lat, lon], 13);

    displayResults.map(({ id, name, description, lat, lon }) => {
      const marker = L.marker([lat, lon])
        .addTo(mapInstanceRef.current)
        .bindPopup(createPopupContent({ id, name, description }));

      marker.on("popupopen", () => {
        const btn = document.getElementById(`btn-${id}`);
        const textarea = document.getElementById(`review-${id}`);
        if (btn && textarea) {
          btn.addEventListener("click", () => {
            const review = textarea.value;
            addReview(id, review);
            textarea.value = "";
          });
        }
      });

      markersRef.current.push(marker);
      return marker;
    });
  }, [displayResults, addReview]);

  // Create popup HTML string
  const createPopupContent = ({ id, name, description }) => `
    <div>
      <strong>${name}</strong><br/>
      <p>${description}</p>
      <textarea id="review-${id}" rows="3" placeholder="Leave your review here..."></textarea>
      <button type="button" id="btn-${id}">Submit Review</button>
    </div>
  `;

  return (
    <div
      className="map"
      ref={mapRef}
      style={{ height: "100%", width: "100%" }}
    ></div>
  );
}

export default Map;
