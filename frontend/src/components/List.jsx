// import { useEffect, useState } from "react";
// components
import Restaurant from "./Restaurant";

export default function List({ restaurants }) {

  if (restaurants.length === 0) {
    return <div className="error">No restaurants available at the moment. Why don't create one?</div>
  }

  return (
    <div className="row">
      {restaurants.map(restaurant => <Restaurant key={restaurant._id} restaurant={restaurant} />)}
    </div>
  )
}
