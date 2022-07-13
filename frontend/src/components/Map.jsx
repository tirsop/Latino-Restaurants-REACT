import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { useEffect, useRef, useState } from 'react';
// styles
import './Map.css'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;



export default function Map({ restaurants }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(139.7397);
  const [lat, setLat] = useState(35.6694);
  const [zoom, setZoom] = useState(10.62);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [lng, lat],
      zoom: zoom
    });
  });


  return (
    // <div>
    <div ref={mapContainer} className="map-container" />
    // </div>
  )
}
