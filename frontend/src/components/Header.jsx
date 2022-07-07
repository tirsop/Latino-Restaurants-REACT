import { Link } from 'react-router-dom'

// styles
import './Header.css'

export default function Header() {
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-start mb-3">
        <div className="">
          <h1>Spanish <span className="fw-light">Restaurants in Tokyo</span></h1>
          <p className="fs-6 fw-light text-muted">Find where to eat authentic Spanish food in Tokyo</p>
        </div>
        <Link to='/restaurants/new' className="bg-light buttons button-add">
          Add a restaurant
        </Link>
      </div>
    </div>
  )
}
