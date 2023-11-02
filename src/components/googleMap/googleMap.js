import { GoogleMap,useLoadScript,Marker } from '@react-google-maps/api';



export default function Gmap(){


    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
    });


    if(!isLoaded) return <div>Loading.....</div>;
    return <Map />
}

function Map(){
    return(
        <GoogleMap
            zoom={15}
            center={{lat:44, lng: -80}}
            mapContainerClassName='map_container'
        >

            <Marker position={{lat:44, lng: -80}} />
            

        </GoogleMap>
    )
}