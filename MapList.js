import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const MapList = ({ data }) => {
  const mapContainerStyle = {
    width: '800px',
    height: '600px'
  };

  const center = {
    lat: '27.664827',
    lng: '-83.915754',
  };

  return (
    <LoadScript googleMapsApiKey= "AIzaSyBpfyrBMTrgHH3YnaGHxfjEN_w7OXBJoqc">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={12}
      >
        {data.map((item, index) => (
          <Marker key={index} position={{ lat: item.latitude, lng: item.longitude }} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapList;