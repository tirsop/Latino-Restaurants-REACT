import { useEffect, useState } from "react";
// import { useFetch } from "../hooks/useFetch";
// components
import Header from "../components/Header";
import Map from "../components/Map";
import List from "../components/List";


export default function Home() {
  // // fetching data using a custom hook
  // const { data: restaurants, isPending, error } = useFetch('http://localhost:3001/api/restaurants')

  const [restaurants, setRestaurants] = useState([]);
  const [isPending, setIsPending] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      const response = await fetch('http://localhost:3001/api/restaurants');
      const data = await response.json();
      setRestaurants(data.restaurants);
      setIsPending(false);
    };

    fetchData();

  }, []);


  return (
    <>
      <Header />
      <Map />
      {/* {error && <p>{error}</p>} */}
      {isPending && <p>Loading...</p>}
      {restaurants && <List restaurants={restaurants} />}
    </>
  )
}
