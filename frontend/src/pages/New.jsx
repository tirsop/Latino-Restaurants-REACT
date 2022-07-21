import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
// styles
import './New.css'


export default function New() {
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const data = Object.fromEntries([...formData.entries()]);   // convert array of arrays into an object
    try {
      const response = await fetch('/api/restaurants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'restaurant': data })
      });
      const resData = await response.json();
      console.log(resData);
      toast.success('🌮 Restaurant created!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate('/')
    } catch (error) {
      alert(error.message || 'Something went wrong!');
    }
  }

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
                    name="name"
                    required />
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="location">Nearest Station or Neighborhood:</label>
                  <input type="text" id='location'
                    className="form-control"
                    name="location"
                    required />
                </div>

                <div className="mb-3">
                  <span className="form-label">Food from which country?</span>
                  <div className="flag-buttons">
                    <label>
                      <input type="radio" id="spain"
                        value="spain"
                        name="country"
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
                      />
                      <div className="btn-flag-form">
                        <p className="flag-icon" title="Peru">🇵🇪</p>
                        <p className="flag-name">Peru</p>
                      </div>
                    </label>
                    <label>
                      <input type="radio" id="argentina"
                        value="argentina"
                        name="country"
                      />
                      <div className="btn-flag-form">
                        <p className="flag-icon" title="Argentina">🇦🇷</p>
                        <p className="flag-name">Argentina</p>
                      </div>
                    </label>
                    <label>
                      <input type="radio" id="other"
                        value="other"
                        name="country"
                      />
                      <div className="btn-flag-form">
                        <img className="radio-img" src="https://st2.depositphotos.com/4202565/6631/v/380/depositphotos_66318347-stock-illustration-latin-america-map.jpg?forcejpeg=true" alt="Latin America map" title="other latin countries" />
                        <p className="flag-name">Other</p>
                      </div>
                    </label>
                  </div>
                  {/* <span className="form-label ms-3">If other, please specify:</span>
                  <label>
                    <select id="country" className="form-select ms-3" name="country" >
                      <option defaultValue> -- select an option -- </option>
                      <option value="bolivia">Bolivia</option>
                      <option value="brasil">Brasil</option>
                      <option value="chile">Chile</option>
                      <option value="costa rica">Costa Rica</option>
                      <option value="cuba">Cuba</option>
                      <option value="ecuador">Ecuador</option>
                      <option value="el salvador">El Salvador</option>
                      <option value="guatemala">Guatemala</option>
                      <option value="haiti">Haití</option>
                      <option value="honduras">Honduras</option>
                      <option value="nicaragua">Nicaragua</option>
                      <option value="panama">Panamá</option>
                      <option value="paraguay">Paraguay</option>
                      <option value="republica dominicana">República Dominicana</option>
                      <option value="uruguay">Uruguay</option>
                      <option value="venezuela">Venezuela</option>
                      <option value="others">Other, Mix, Fushion</option>
                    </select>
                  </label> */}
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="url">Google Maps URL:</label>
                  <input type="text" id='url'
                    className="form-control"
                    name="url"
                    required />
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="image">Image URL</label>
                  <input type="text" id='image'
                    className="form-control"
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
