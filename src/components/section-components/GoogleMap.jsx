import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const GoogleMap = (props) => {
  const { latitude, longitude } = props?.propertyDetails;
  const markerOptions = {
    position: { lat: 37.7749, lng: -122.4194 },
    icon: {
      url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
      anchor: new props.google.maps.Point(16, 16),
      scaledSize: new props.google.maps.Size(32, 32),
      labelOrigin: new props.google.maps.Point(16, 16),
      label: {
        text: '\u25CF',
        color: 'red',
        fontSize: '20px',
        fontWeight: 'bold',
      },
    },
  };
  const mapStyles = {
    width: "85%",
    height: "400px",
    margin: "0 auto",
  };

  return (
    <div className="mt-100 property-details-google-map mb-100 pb-90 col-lg-12">
      <Map
        google={props?.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: latitude ? latitude : 25.2048, // Replace with the latitude from your map link
          lng: longitude ? longitude : 55.2708, // Replace with the longitude from your map link
        }}
      >
        <Marker options={markerOptions} />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDKYD9s3SGGpsax1OWRlZXTM7ZHW34X6vk", // Replace with your actual API key
})(GoogleMap);
