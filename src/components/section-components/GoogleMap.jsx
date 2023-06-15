import React from "react";
import { Map, GoogleApiWrapper,Marker } from "google-maps-react";

const GoogleMap = (props) => {
  const {latitude,longitude}=props?.propertyDetails
  const markerOptions = {
    position: {    lat: latitude?latitude:25.2048, // Replace with the latitude from your map link
    lng: longitude?longitude: 55.2708, // Replace with the longitude from your map link
   },
    icon: {
      path: 'M10 0 L0 20 L20 20 Z',
      fillColor: '#FF0000',
      fillOpacity: 1,
      strokeWeight: 0,
    },
  };
  const mapStyles = {
    width: "100%",
    height: "400px",
  };

  
  return (
    <div className="mt-100 property-details-google-map mb-100 pb-90">
      <Map
        google={props?.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: latitude?latitude:25.2048, // Replace with the latitude from your map link
          lng: longitude?longitude: 55.2708, // Replace with the longitude from your map link
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
