import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const GoogleMap = (props) => {
  const mapStyles = {
    width: '100%',
    height: '400px',
  };

  const latitude = 37.7749; // Replace with the latitude from your map link
  const longitude = -122.4194;
  return (
    <Map
      google={google}
      zoom={14}
      style={mapStyles}
      initialCenter={{
        lat: latitude, // Replace with the latitude from your map link
        lng: longitude, // Replace with the longitude from your map link
      }}
    />
  );
};

export default GoogleApiWrapper({
  apiKey: 'YOUR_API_KEY', // Replace with your actual API key
})(GoogleMap);
