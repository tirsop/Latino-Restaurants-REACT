import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { useEffect, useRef, useState } from 'react';
console.log(process.env.REACT_APP_MAPBOX_TOKEN);
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
  });

  return (
    <div style={{ width: '100px', height: "100px" }}>
      <div ref={mapContainer} className="map-container" />
    </div>
  )
}
