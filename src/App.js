import * as React from "react";
import Map, { NavigationControl, Marker } from "react-map-gl";
import Navbar from "./components/navbar.js";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Map
        mapLib={maplibregl}
        initialViewState={{
          longitude: 36.3735,
          latitude: 9.8995,
          zoom: 14,
        }}
        style={{ width: "100%", height: " calc(100vh - 77px)" }}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=pWz0R2VigZpKknaGzWpU"
      >
        <NavigationControl position="top-left" />
        <Marker latitude={36.53} longitude={10.71} />
      </Map>
    </div>
  );
}

export default App;
