// styles
import './Spinner.css'

export default function Spinner() {
  return (
    // <div className='loadingSpinnerContainer'>
    //   <div className='loadingSpinner'></div>
    // </div>
    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
  )
}

