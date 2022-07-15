import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { useEffect, useRef, useState } from 'react';
// styles
import './Map.css'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;



export default function Map({ restaurants }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(139.7397);
  const [lat] = useState(35.6694);
  const [zoom] = useState(10.62);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
      maxBounds: [
        { lat: 35.195384, lng: 138.718320 }, // SW
        { lat: 35.911546, lng: 140.290738 } // NE
      ]
    });
  });


  return (
    // <div>
    <div ref={mapContainer} className="map-container" />
    // </div>
  )
}
