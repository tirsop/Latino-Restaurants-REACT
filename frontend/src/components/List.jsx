
// components
import Restaurant from "./Restaurant";
// styles
import './List.css'

export default function List({ restaurants }) {

  if (restaurants.length === 0) {
    return <div className="error">No restaurants available at the moment. Why don't create one?</div>
  }

  return (
    <div className="list">
      <div className="row">
        {restaurants.map(restaurant => <Restaurant key={restaurant._id} restaurant={restaurant} />)}
      </div>
    </div>
  )
}
