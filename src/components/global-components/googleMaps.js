import React, { useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const GoogleMapOnPlaceBasis = () => {
    const placeName="Hodal"

  useEffect(() => {
    if (placeName) {
      // Call the geocoding service to get the coordinates for the specified place name
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: placeName }, (results, status) => {
        if (status === 'OK' && results.length > 0) {
          const location = results[0].geometry.location;

          // Code to initialize and render the map using the retrieved location
          const map = new window.google.maps.Map(document.getElementById('map'), {
            center: location,
            zoom: 8,
          });
        }
      });
    }
  }, [placeName]);

  return <div id="map" style={{ height: '400px', width: '100%' }}></div>;
};

export default GoogleMapOnPlaceBasis;
