import { useEffect, useState } from "react";
// components
import Restaurant from "./Restaurant";

export default function List() {
  const [restaurants, setRestaurants] = useState([]);
  const [isPending, setIsPending] = useState(false);
  // const [error, setError] = useState(false)


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
    <div className="">
      {isPending && <p className='loading'>Loading.........</p>}
      {restaurants && (
        <div className="container">
          <div className="row">
            {restaurants.map(restaurant => <Restaurant key={restaurant._id} restaurant={restaurant} />)}
          </div>
        </div>
      )}
    </div>
  )
}
