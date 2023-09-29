import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useMapEvent } from "react-leaflet/hooks";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon } from "leaflet";
import "leaflet/dist/leaflet.css"; // Importar Leaflet CSS
import logo from "../../../assets/logo2.jpeg";

// COMPONENTE PARA MANEJAR EVENTOS CLICK
const MapEventHandlers = () => {
  const map = useMapEvent("click", () => {
    map.setView([4.69497546746545, -74.12564000110368], map.getZoom());
  });
  return null; // Este componente no renderiza nada
};

const MapLeaflet = () => {
  const markers = {
    geocode: [4.69497546746545, -74.12564000110368],
    popup: "Here we are",
  };

  // HACEMOS NUESTRO PROPIO ICONO DEL MARACADOR
  const myIcon = new Icon({
    iconUrl: logo,
    iconSize: [38, 38], // Tamaño del icono
  });

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div style="background-color: red; color: white; border-radius: 50%; width: 30px; height: 30px; display: flex; justify-content: center; align-items: center;">${cluster.getChildCount()}</div>`,
      iconSize: [33, 33],
    });
  };

  return (
    <div style={{ height: "400px" }}>
      {/* altura del contenedor del mapa */}
      <MapContainer
        style={{ height: "400px" }}
        center={[4.69497546746545, -74.12564000110368]}
        zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Usamos el componente MapEventHandlers  */}
        <MapEventHandlers />

        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createCustomClusterIcon}>
          <Marker position={markers.geocode} icon={myIcon}>
            <Popup>{markers.popup}</Popup>
          </Marker>
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default MapLeaflet;

//! OTRA FORMA DE AGREGAR UN MAPA CON LEAFLET JUNTO CON HOOKS Y LEAFLET JAVASCRIPT : https://leafletjs.com/examples/quick-start/

// import React, { useEffect } from "react";
// import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
// import L from "leaflet"; // Import Leaflet JavaScript

// const MapLeaflet = () => {
//   useEffect(() => {
//     // Inicializamos el mapa
//     const map = L.map("map").setView([51.505, -0.09], 13);

//     // Añadimos una capa
//     L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//       attribution:
//         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     }).addTo(map);
//   }, []);

//   return <div id="map" style={{ height: "400px" }}></div>;
// };

// export default MapLeaflet;

/*  
DOCUMENTACIÓN DE LEAFLET: https://leafletjs.com/reference.htmlS  + tutorial https://www.youtube.com/watch?v=jD6813wGdBA
DOCUMENTACIÓN PARA ENTENDER EL TAMPLATE DE LA URL: https://leafletjs.com/reference.html#tilelayer-url-template
DOCUMENTACIÓN DE MAP TILER: https://cloud.maptiler.com/maps/

Es un contenedor de un mapa con unas propiedades que leaflet otorga, se recomienda ubicar el centro del mapa con la latitud y longitud de la ubicación, igualmente see manaje un grado de zoom según la docu de leaflet 


https://www.youtube.com/watch?v=NfDTO4c0xLc

*/
