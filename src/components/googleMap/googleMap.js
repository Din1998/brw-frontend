


import { GoogleMap, useLoadScript, MarkerF, InfoWindow } from '@react-google-maps/api';
import { useMemo, useState } from 'react';

import Image from 'next/image';

import boatIcon from '@/assets/image/common/boaticon.png'

import boatImg from '@/assets/image/product/img4.png'

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

  return(

    <>
    {/* <Image src={boatIcon} /> */}
    <Map />;
    </>
  )
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

  const customIcon = 'https://boat-rental.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fboaticon.73f4bd80.png&w=64&q=75';

  

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
            <div className='thumb_wrap'>
              <Image src={boatImg} alt='..'/>
            </div>
            <div className='content_wrap'>
              <h6 className='title'>Yachts Camille</h6>
              <p className='location'><i class="fa-solid fa-location-dot"></i>   2066 Leo Street</p>
              
            </div>
          </div>
        </InfoWindow>
      )}
    </MarkerF>
  );
}