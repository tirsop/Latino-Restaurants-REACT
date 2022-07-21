import { useEffect, useState } from "react";
// components
import Header from "../components/Header";
import Map from "../components/Map";
import List from "../components/List";
import Spinner from '../components/Spinner'


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
      {restaurants && <List restaurants={restaurants} />}
      {isPending &&
        <div className="d-flex justify-content-center">
          {<Spinner />}
        </div>}
    </>
  )
}
