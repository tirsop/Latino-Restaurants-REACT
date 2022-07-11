import { useEffect, useState } from "react";


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
      {restaurants && <div className="">
        {restaurants.map(restaurant => (
          <p className="">{restaurant.name}</p>
        ))}
      </div>}
    </div>
  )
}
