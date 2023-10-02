import { GoogleMap, LoadScript } from "@react-google-maps/api";
import config from "../config";

const googleApiKey = config.REACT_APP_GOOGLE_API_KEY;

const Map = () => {
  const containerStyle = {
    width: "100%",
    height: "400px",
    borderRadius: "28px",
  };

  const center = {
    lat: 4.69497546746545,
    lng: -74.12564000110368,
  };

  return (
    <LoadScript googleMapsApiKey={googleApiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}></GoogleMap>
    </LoadScript>
  );
};

export default Map;

// https://www.youtube.com/watch?v=iP3DnhCUIsE
