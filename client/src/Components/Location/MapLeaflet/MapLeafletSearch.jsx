/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import config from "../config";

const mapTilerApiKey = config.REACT_APP_API_MAPTILER;

const position = [4.7109479, -74.1478375];

function ResetCenterView({ selectPosition }) {
  const map = useMap();

  useEffect(() => {
    if (selectPosition) {
      map.setView(
        L.latLng(selectPosition?.lat, selectPosition?.lon),
        map.getZoom(),
        {
          animate: true,
        }
      );
    }
  }, [selectPosition]);

  return null;
}

export default function Maps({ selectPosition }) {
  const locationSelection = [selectPosition?.lat, selectPosition?.lon];

  return (
    <div style={{ height: "423px", marginLeft: "10px" }}>
      <MapContainer
        center={position}
        zoom={13}
        style={{ width: "95%", height: "95%", marginLeft: "10px" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={`https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=${mapTilerApiKey}`}
        />
        {selectPosition && (
          <Marker position={locationSelection}>
            <Popup>Here your result</Popup>
          </Marker>
        )}
        <ResetCenterView selectPosition={selectPosition} />
      </MapContainer>
    </div>
  );
}
