/* eslint-disable react/prop-types */
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"; //useMap
import { Icon, divIcon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { useTranslation } from "react-i18next";

import "leaflet/dist/leaflet.css";

const targetLocation = [4.7109479, -74.1478375]; // Ubicación de la clínica que va a ser el centro
const myIcon = new Icon({
  iconUrl: 'https://res.cloudinary.com/drpge2a0c/image/upload/v1697553463/assets/logo2sinfond0_od1ox8.png',
  iconSize: [33, 33],
});

// Componente principal del mapa
const MapLeaflet = () => {
  const { t } = useTranslation();

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
          {/* <LocationMarker /> */}
          <Marker position={targetLocation} icon={myIcon}>
            <Popup>{t("LANDING PAGE.LOCATION.MAP.OUR FACILITY")}</Popup>
          </Marker>
          {/* <Buttons /> */}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default MapLeaflet;
