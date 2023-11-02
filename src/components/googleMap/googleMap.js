import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import { useMemo } from 'react';


const markerPositions = [
  { lat: 44.123, lng: -80.456 }, // Example position 1
  { lat: 44.234, lng: -80.567 }, // Example position 2
  { lat: 44.345, lng: -80.678 }, // Example position 3
  { lat: 44.448, lng: -80.679 }, // Example position 3
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
      <MarkerF key={index} position={position} />
    ));
  }, [markerPositions]);

  return (
    <GoogleMap zoom={10} center={{ lat: 44.123, lng: -80.456 }} mapContainerClassName='map_container'>
      {markerElements}
    </GoogleMap>
  );
}