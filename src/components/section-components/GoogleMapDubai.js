import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const GoogleMapDubai = (props) => {
  const markerOptions = {
    position: {
      lat:  25.2048, // Replace with the latitude from your map link
      lng: 55.2708, // Replace with the longitude from your map link
    },
    icon: {
      url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
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
          lat:   25.2048, // Replace with the latitude from your map link
          lng:  55.2708, // Replace with the longitude from your map link
        }}
      >
        <Marker options={markerOptions} />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDKYD9s3SGGpsax1OWRlZXTM7ZHW34X6vk", // Replace with your actual API key
})(GoogleMapDubai);
