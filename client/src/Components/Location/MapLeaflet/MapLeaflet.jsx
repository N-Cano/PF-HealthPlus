/* eslint-disable react/prop-types */
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, divIcon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { useMapEvents } from "react-leaflet";
import logo from "../../../assets/logo2.jpeg";

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

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

// Componente para manejar eventos
function MapEventHandlers({ targetLocation, map }) {
  // Función para manejar el zoom cuando se haga click al marcador con el ícono
  const handleMarkerClick = () => {
    map.flyTo(myIcon, 50);
  };

  return (
    <>
      {/* Para detectar mi ubicación */}
      <button
        onClick={() => LocationMarker}
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

      {/* Hacemos un marcador con la ubicación destino de la clínica */}
      {targetLocation && (
        <Marker
          position={targetLocation}
          icon={myIcon}
          onClick={handleMarkerClick}>
          <Popup>Our facility</Popup>
        </Marker>
      )}
    </>
  );
}
// Componente principal del mapa
const MapLeaflet = () => {
  const targetLocation = [4.7109479, -74.1478375];

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div style="background-color: red; color: white; border-radius: 50%; width: 30px; height: 30px; display: flex; justify-content: center; align-items: center;">${cluster.getChildCount()}</div>`,
      iconSize: [33, 33],
    });
  };

  return (
    <div style={{ height: "400px", marginLeft: "20px" }}>
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
          <MapEventHandlers targetLocation={targetLocation} />
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default MapLeaflet;

/*  
DOCUMENTACIÓN DE LEAFLET: https://leafletjs.com/reference.htmlS  + tutorial https://www.youtube.com/watch?v=jD6813wGdBA
DOCUMENTACIÓN PARA ENTENDER EL TAMPLATE DE LA URL: https://leafletjs.com/reference.html#tilelayer-url-template
DOCUMENTACIÓN DE MAP TILER: https://cloud.maptiler.com/maps/

Es un contenedor de un mapa con unas propiedades que leaflet otorga, se recomienda ubicar el centro del mapa con la latitud y longitud de la ubicación, igualmente see manaje un grado de zoom según la docu de leaflet 


https://www.youtube.com/watch?v=NfDTO4c0xLc

*/
