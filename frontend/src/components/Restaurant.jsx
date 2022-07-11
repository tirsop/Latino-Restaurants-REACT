// styles
import './Restaurant.css'

export default function Restaurant({ restaurant }) {
  return (
    <div className="col-xs-12 col-sm-6 col-md-4">
      <a href={restaurant.url} className="text-decoration-none" target="_blank" rel="noreferrer">
        <img src={restaurant.image} className="img-fluid rounded-2 restaurant-img" alt="Restaurant's front door" />
        <div className="ps-1">
          <h5 className="text-dark fs-5 fw-light mt-1 mb-0">{restaurant.name}</h5>
          <p className="text-muted fs-6">{restaurant.location}</p>
        </div>
      </a>
    </div>
  )
}
