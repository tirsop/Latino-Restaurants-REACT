import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { useEffect, useRef, useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
// styles
import './Map.css'
// tokens
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

// const Marker = ({ onClick, children, feature }) => {
//   const _onClick = () => {
//     onClick(feature.properties.description);
//   };

//   return (
//     <button onClick={_onClick} className="marker">
//       {children}
//     </button>
//   );
// };

const Marker = () => {
  return (
    <button>
      🇪🇸
    </button>
  );
};



export default function Map({ restaurants }) {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [139.7397, 35.6694],
      zoom: 10.62,
      maxBounds: [
        { lat: 35.195384, lng: 138.718320 }, // SW
        { lat: 35.911546, lng: 140.290738 } // NE
      ]
    });

    // Create default markers
    restaurants.map((restaurant) =>
      new mapboxgl.Marker().setLngLat(restaurant.geometry.coordinates).addTo(map)
    );

    // // Render custom marker components
    // restaurants.forEach((restaurant) => {
    //   // Create a React ref
    //   const ref = React.createRef();
    //   // Create a new DOM node and save it to the React ref
    //   ref.current = document.createElement("div");
    //   // Render a Marker Component on our new DOM node
    //   ReactDOM.render(
    //     <Marker onClick={markerClicked} restaurant={restaurant} />,
    //     ref.current
    //   );
    //   // Create a Mapbox Marker at our new DOM node
    //   new mapboxgl.Marker(ref.current)
    //     .setLngLat(restaurant.geometry.coordinates)
    //     .addTo(map);
    // });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), "top-right");
    // Clean up on unmount
    return () => map.remove();

  }, []);

  const markerClicked = (title) => {
    window.alert(title);
  };


  // export default function Map({ restaurants }) {
  //   const mapContainer = useRef(null);
  //   const map = useRef(null);
  //   const [lng] = useState(139.7397);
  //   const [lat] = useState(35.6694);
  //   const [zoom] = useState(10.62);

  //   useEffect(() => {
  //     if (map.current) return; // initialize map only once
  //     map.current = new mapboxgl.Map({
  //       container: mapContainer.current,
  //       style: 'mapbox://styles/mapbox/streets-v11',
  //       center: [139.7397, 35.6694],
  //       zoom: 10.62,
  //       maxBounds: [
  //         { lat: 35.195384, lng: 138.718320 }, // SW
  //         { lat: 35.911546, lng: 140.290738 } // NE
  //       ]
  //     });
  //   });


  return (
    // <div>
    <div ref={mapContainer} className="map-container" />
    // </div>
  )
}
