/* eslint-disable react/prop-types */
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"; //useMap
import { Icon, divIcon } from "leaflet";
import { useMapEvents } from "react-leaflet/hooks";
import MarkerClusterGroup from "react-leaflet-cluster";
import { useState } from "react";

import "leaflet/dist/leaflet.css";
import logo from "../../../assets/logo2.jpeg";

const targetLocation = [4.7109479, -74.1478375]; // Ubicación de la clínica que va a ser el centro
const myIcon = new Icon({
  iconUrl: logo,
  iconSize: [33, 33],
});

// Componente para manejar el marcador con la ubicación del usuario
function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(event) {
      setPosition(event.latlng);
      map.flyTo(event.latlng, map.getZoom());
    },
  });

  return position === null ? (
    setPosition(targetLocation)
  ) : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

// Componente con botones
const Buttons = () => {
  // const map = useMap();
  return (
    <>
      {/* Para detectar mi ubicación */}
      <button
        onClick={() => LocationMarker()}
        style={{
          background: "black",
          color: "white",
          borderRadius: "3px",
          height: "32px",
          width: "200px",
          position: "absolute",
          top: "355px",
          left: "48px",
          zIndex: 1000,
        }}>
        Find my location
      </button>
    </>
  );
};

// Componente principal del mapa
const MapLeaflet = () => {
  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div style="background-color: red; color: white; border-radius:50%; width: 30px; height: 30px; display: flex; justify-content: center; align-items: center;">${cluster.getChildCount()}</div>`,
      iconSize: [33, 33],
    });
  };

  return (
    <div
      style={{
        height: "400px",
        width: "420px",
        marginLeft: "30px",
      }}>
      <MapContainer
        style={{ height: "400px" }}
        center={targetLocation}
        zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createCustomClusterIcon}>
          <LocationMarker />
          <Marker position={targetLocation} icon={myIcon}>
            <Popup>Our facility</Popup>
          </Marker>
          <Buttons />
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default MapLeaflet;
