import React, { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import getCenter from "geolib/es/getCenter";
//import "mapbox-gl/dist/mapbox-gl.css";
import PopupCard from './PopupCard';

function Map({ searchResults }) {
    const [selectedLocation, setSelectedLocation] = useState({});

    const coordinates = searchResults.map(result => ({
      longitude: result.long,
      latitude: result.lat,
    }));

    const center = getCenter(coordinates);

    const [viewport, setViewport] = useState({
      width: '100%',
      height: '100%',
      latitude: center.latitude,
      longitude: center.longitude,
      zoom: 11,
  });

  return (
    <ReactMapGL
        mapStyle='mapbox://styles/4emar/cl6trldfm001p14s9pwjcc3f3'
        mapboxAccessToken={process.env.mapbox_key}
        {...viewport}
        onMove={evt => setViewport(evt.viewport)}
    >
      {searchResults.map(result => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
          >
              <p onClick={() => setSelectedLocation(result)} 
                className='bg-white border rounded-full p-1 font-semibold 
                cursor-pointer text-md active:scale-95 active:bg-gray-300'
                aria-label='push-pin'
                >
                {result.price}
              </p>
          </Marker>
          {selectedLocation.long === result.long ? (
            <Popup
              closeOnClick={false}
              onClose={() => setSelectedLocation({})}
              latitude={result.lat}
              longitude={result.long}
              maxWidth="300px"
            >
              <PopupCard result={result}/>
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  )
}

export default Map
