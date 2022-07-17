import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
// styles
import './New.css'


export default function New() {
  // const [name, setName] = useState('')
  // const [location, setLocation] = useState('')
  // const [country, setCountry] = useState('Spain')
  // const [url, setUrl] = useState('')
  // const [image, setImage] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const data = Object.fromEntries([...formData.entries()]);
    try {
      // const response = await fetch('http://localhost:3001/api/restaurants', {
      const response = await fetch('/api/restaurants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'restaurant': data })
      });
      const resData = await response.json();
      console.log(resData);
      navigate('/')
    } catch (error) {
      alert(error.message || 'Something went wrong!');
    }
  }

  // const handleChange = e => {
  //   setFormData(prevState => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value
  //   }))
  // }




  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6 offset-md-3 col-xl-5 offset-xl-3">
          <div className="card shadow mb-5">
            <img className="card-img-top new-form-img" src="https://images.unsplash.com/photo-1630175860333-5131bda75071?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="paella" />
            <div className="card-body">
              <h5 className="card-title text-center">Add a new Restaurant!</h5>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label" htmlFor="name">Name:</label>
                  <input type="text" id='name'
                    className="form-control"
                    // onChange={handleChange}
                    name="name"
                    required />
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="location">Nearest Station or Neighborhood:</label>
                  <input type="text" id='location'
                    className="form-control"
                    // onChange={handleChange}
                    name="location"
                    required />
                </div>

                {/* <div className="mb-3">
                  <label className="form-label" htmlFor="country">Food from which country?</label>
                  <select id="country"
                    className="form-select"
                    // onChange={handleChange}
                    name="country"
                    value={country} >
                    <option value="spain">Spain</option>
                    <option value="mexico">Mexico</option>
                    <option value="peru">Peru</option>
                    <option value="others">Other Latin Countries</option>
                  </select>
                </div> */}

                <div className="mb-3">
                  <span className="form-label">Food from which country?</span>
                  <div className="flag-buttons">
                    <label>
                      <input type="radio" id="spain"
                        value="spain"
                        name="country"
                        // onChange={handleChange}
                        defaultChecked />
                      <div className="btn-flag-form">
                        <p className="flag-icon" title="Spain">🇪🇸</p>  {/* title attribute to display the country's name when hover */}
                        <p className="flag-name">Spain</p>
                      </div>
                    </label>
                    <label>
                      <input type="radio" id="mexico"
                        value="mexico"
                        name="country"
                      // onChange={handleChange} 
                      />
                      <div className="btn-flag-form">
                        <p className="flag-icon" title="Mexico">🇲🇽</p>
                        <p className="flag-name">Mexico</p>
                      </div>
                    </label>
                    <label>
                      <input type="radio" id="peru"
                        value="peru"
                        name="country"
                      // onChange={handleChange} 
                      />
                      <div className="btn-flag-form">
                        <p className="flag-icon" title="Peru">🇵🇪</p>
                        <p className="flag-name">Peru</p>
                      </div>
                    </label>
                    <label>
                      <input type="radio" id="colombia"
                        value="colombia"
                        name="country"
                      // onChange={handleChange} 
                      />
                      <div className="btn-flag-form">
                        <p className="flag-icon" title="Colombia">🇨🇴</p>
                        <p className="flag-name">Colombia</p>
                      </div>
                    </label>
                    <label>
                      <input type="radio" id="argentina"
                        value="argentina"
                        name="country"
                      // onChange={handleChange} 
                      />
                      <div className="btn-flag-form">
                        <p className="flag-icon" title="Argentina">🇦🇷</p>
                        <p className="flag-name">Argentina</p>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="url">Google Maps URL:</label>
                  <input type="text" id='url'
                    className="form-control"
                    // onChange={handleChange}
                    name="url"
                    required />
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="image">Image URL</label>
                  <input type="text" id='image'
                    className="form-control"
                    // onChange={handleChange}
                    name="image"
                  />
                </div>

                <div className="mb-3 d-grid">
                  <button className='btn btn-success'>Add Restaurant</button>
                </div>

              </form>

              <Link to='/' className="text-decoration-none link-back">
                Back to all restaurants
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
