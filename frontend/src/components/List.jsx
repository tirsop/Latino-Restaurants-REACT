import { FaGripLines } from 'react-icons/fa'
// components
import Restaurant from "./Restaurant";
import Footer from './Footer'
// styles
import './List.css'

export default function List({ restaurants }) {

  if (restaurants.length === 0) {
    return <div className="error">No restaurants available at the moment. Why don't create one?</div>
  }

  return (
    // filter by nationality
    <div className="list">
      <div className="row">
        <FaGripLines className="griplines" />
        <div className="results-number">
          <p className="">{restaurants.length} restaurants</p>
        </div>
        {restaurants.map(restaurant => <Restaurant key={restaurant._id} restaurant={restaurant} />)}
        <Footer />
      </div>
    </div>
  )
}
