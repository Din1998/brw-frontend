


import { GoogleMap, useLoadScript, MarkerF, InfoWindow } from '@react-google-maps/api';
import { useMemo, useState } from 'react';

const markerPositions = [
  { lat: 44.123, lng: -80.456 },
  { lat: 44.234, lng: -80.567 },
  { lat: 44.345, lng: -80.678 },
  { lat: 44.448, lng: -80.679 },
  // Add more positions as needed
];

export default function Gmap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
  });

  if (!isLoaded) return <div>Loading.....</div>;

  return <Map />;
}

function Map() {
  const markerElements = useMemo(() => {
    return markerPositions.map((position, index) => (
      <MarkerWithInfo key={index} position={position} />
    ));
  }, [markerPositions]);

  return (
    <GoogleMap zoom={10} center={{ lat: 44.123, lng: -80.456 }} mapContainerClassName="map_container">
      {markerElements}
    </GoogleMap>
  );
}

function MarkerWithInfo({ position }) {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const toggleInfoWindow = () => {
    setIsInfoOpen(!isInfoOpen);
  };

  const customIcon = 'https://cdn-icons-png.flaticon.com/512/535/535239.png';

  return (
    <MarkerF
      position={position}
      onClick={toggleInfoWindow}
      icon={{
        url: customIcon,
        scaledSize: new window.google.maps.Size(30, 30), 
      }}
    >
      {isInfoOpen && (
        <InfoWindow onCloseClick={toggleInfoWindow}>
          <div className='boat_info'>
            <div><h6>Yachts Camille</h6></div>
            <div><p>8 guest,events in como </p></div>
            <div><p>5.0</p></div>
          </div>
        </InfoWindow>
      )}
    </MarkerF>
  );
}