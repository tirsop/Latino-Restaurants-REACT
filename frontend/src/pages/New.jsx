import { useState } from "react"
import { Link } from 'react-router-dom'
// styles
import './New.css'


export default function New() {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [country, setCountry] = useState('Spain')
  const [url, setUrl] = useState('')
  const [image, setImage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6 offset-md-3 col-xl-4 offset-xl-4">
          <div className="card shadow mb-5">
            <img className="card-img-top new-form-img" src="https://images.unsplash.com/photo-1630175860333-5131bda75071?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="paella" />
            <div className="card-body">
              <h5 className="card-title text-center">Add a new Restaurant!</h5>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label" htmlFor="name">Name:</label>
                  <input type="text" id='name'
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                    name="restaurant[name]"
                    value={name}
                    required />
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="location">Nearest Station or Neighborhood:</label>
                  <input type="text" id='location'
                    className="form-control"
                    onChange={(e) => setLocation(e.target.value)}
                    name="restaurant[location]"
                    value={location}
                    required />
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="country">Food from which country?</label>
                  <select id="country"
                    className="form-select"
                    onChange={(e) => setCountry(e.target.value)}
                    name="restaurant[country]"
                    value={country} >
                    <option value="spain">Spain</option>
                    <option value="mexico">Mexico</option>
                    <option value="peru">Peru</option>
                    <option value="others">Other Latin Countries</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="url">Google Maps URL:</label>
                  <input type="text" id='url'
                    className="form-control"
                    onChange={(e) => setUrl(e.target.value)}
                    name="restaurant[url]"
                    value={url}
                    required />
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="image">Image URL</label>
                  <input type="text" id='image'
                    className="form-control"
                    onChange={(e) => setImage(e.target.value)}
                    name="restaurant[image]"
                    value={image} />
                </div>

                <div className="mb-3 d-grid">
                  <button className='btn btn-success'>Add Restaurant</button>
                </div>

              </form>

              <Link to='/restaurants' className="text-decoration-none link-back">
                Back to all restaurants
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
