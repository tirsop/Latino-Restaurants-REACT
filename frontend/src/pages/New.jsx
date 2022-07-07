import { useState } from "react"


export default function New() {
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className=''>
      <h2 className='page-title'>Add a new restaurant</h2>
      <form onSubmit={handleSubmit}>

        <label htmlFor="name">Restaurant:</label>
        <input type="text" id='name'
          onChange={(e) => setName(e.target.value)}
          value={name}
          required />

        <button
          className='btn'
        >Sumbit</button>

      </form>
    </div>
  )
}
