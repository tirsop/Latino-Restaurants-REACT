import { useEffect, useState } from "react";
// components
import Header from "../components/Header";
import Map from "../components/Map";
import List from "../components/List";


export default function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [isPending, setIsPending] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      const response = await fetch('/api/restaurants');
      const data = await response.json();
      setRestaurants(data.restaurants);
      setIsPending(false);
    };

    fetchData();

  }, []);


  return (
    <>
      <Header />
      <Map restaurants={restaurants} />
      {isPending && <p>Loading...</p>}
      {restaurants && <List restaurants={restaurants} />}
    </>
  )
}
