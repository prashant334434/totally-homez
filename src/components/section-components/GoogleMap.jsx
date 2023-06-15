import React from "react";
import { Map, GoogleApiWrapper,Circle } from "google-maps-react";

const GoogleMap = (props) => {
  const circleOptions = {
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    clickable: false,
  };
  const mapStyles = {
    width: "100%",
    height: "400px",
  };

  const latitude = 25.0935189; // Replace with the latitude from your map link
  const longitude = 55.1816531;
  return (
    <div className="mt-100 property-details-google-map mb-100 pb-90">
      <Map
        google={props?.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: latitude, // Replace with the latitude from your map link
          lng: longitude, // Replace with the longitude from your map link
        }}
      >
        <Circle
          center={{
            lat: latitude,
            lng: longitude,
          }}
          radius={1000} // Replace with your desired radius in meters
          options={circleOptions}
        />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDKYD9s3SGGpsax1OWRlZXTM7ZHW34X6vk", // Replace with your actual API key
})(GoogleMap);
